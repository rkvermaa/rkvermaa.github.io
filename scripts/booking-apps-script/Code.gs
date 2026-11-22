/**
 * Booking backend for ravikverma.com/book (Google Apps Script web app).
 *
 * Runs inside Ravi's Google account. The website calls it to:
 *   GET  ?action=slots   -> free 20-minute slots for the next few weeks (busy times removed)
 *   POST {start,name,email,topic} -> creates a Google Calendar event with a Meet link and
 *                                    emails the invite to the guest (and the owner).
 *
 * Deploy: Deploy -> New deployment -> Web app, Execute as "Me", Access "Anyone".
 * Needs the Advanced Calendar service (see appsscript.json) for the Meet link.
 * The source of truth lives in the website repo: scripts/booking-apps-script/.
 */

const CONFIG = {
  timeZone: 'Asia/Kolkata',
  durationMinutes: 20,
  daysAhead: 21,
  minNoticeHours: 4,
  calendarId: 'primary',
  // Weekly hours in IST. Day numbers: 0 = Sunday ... 6 = Saturday. End may be 24:00 (midnight).
  hours: {
    0: [['14:00', '17:00']],
    1: [['20:00', '24:00']],
    2: [['20:00', '24:00']],
    3: [['20:00', '24:00']],
    4: [['20:00', '24:00']],
    5: [['20:00', '24:00']],
    6: [['14:00', '17:00']],
  },
  title: '20-minute call: Ravi Kumar Verma',
};

/* ---------------- HTTP entry points ---------------- */

function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || 'slots';
  if (action === 'slots') return json_({ ok: true, durationMinutes: CONFIG.durationMinutes, slots: freeSlots_() });
  return json_({ ok: false, error: 'Unknown action' });
}

function doPost(e) {
  let body;
  try {
    body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
  } catch (err) {
    return json_({ ok: false, error: 'Bad request' });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (body.company) return json_({ ok: true, ignored: true });

  const name = String(body.name || '').trim().slice(0, 100);
  const email = String(body.email || '').trim().slice(0, 200);
  const topic = String(body.topic || '').trim().slice(0, 1500);
  const start = new Date(body.start);

  if (!name || !topic) return json_({ ok: false, error: 'Please add your name and what you would like to discuss.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json_({ ok: false, error: 'Please enter a valid email address.' });
  if (isNaN(start.getTime())) return json_({ ok: false, error: 'Please pick a time.' });

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    // Only accept a start time that is still one of the free slots.
    const stillFree = freeSlots_().indexOf(start.toISOString()) !== -1;
    if (!stillFree) return json_({ ok: false, error: 'That time was just taken. Please pick another slot.' });

    const end = new Date(start.getTime() + CONFIG.durationMinutes * 60000);
    const owner = Session.getEffectiveUser().getEmail();
    const event = Calendar.Events.insert(
      {
        summary: CONFIG.title + ' <> ' + name,
        description: 'Booked via ravikverma.com/book\n\nName: ' + name + '\nEmail: ' + email + '\n\nTopic:\n' + topic,
        start: { dateTime: start.toISOString() },
        end: { dateTime: end.toISOString() },
        attendees: [{ email: email, displayName: name }, { email: owner, responseStatus: 'accepted' }],
        conferenceData: {
          createRequest: { requestId: Utilities.getUuid(), conferenceSolutionKey: { type: 'hangoutsMeet' } },
        },
        reminders: { useDefault: true },
      },
      CONFIG.calendarId,
      { conferenceDataVersion: 1, sendUpdates: 'all' },
    );

    return json_({
      ok: true,
      start: start.toISOString(),
      end: end.toISOString(),
      meetLink: event.hangoutLink || null,
    });
  } finally {
    lock.releaseLock();
  }
}

/* ---------------- Slot logic ---------------- */

/** Free slot start times (ISO strings, UTC) within the weekly hours, minus busy calendar time. */
function freeSlots_() {
  const now = new Date();
  const earliest = new Date(now.getTime() + CONFIG.minNoticeHours * 3600000);
  const rangeEnd = new Date(now.getTime() + (CONFIG.daysAhead + 1) * 86400000);
  const busy = busyIntervals_(now, rangeEnd);
  const step = CONFIG.durationMinutes * 60000;
  const slots = [];

  for (let d = 0; d <= CONFIG.daysAhead; d++) {
    const day = new Date(now.getTime() + d * 86400000);
    const ymd = Utilities.formatDate(day, CONFIG.timeZone, 'yyyy-MM-dd');
    const weekday = Number(Utilities.formatDate(day, CONFIG.timeZone, 'u')) % 7; // u: 1=Mon..7=Sun
    const windows = CONFIG.hours[weekday] || [];

    windows.forEach(function (w) {
      const winStart = istDate_(ymd, w[0]);
      const winEnd = istDate_(ymd, w[1]);
      for (let t = winStart.getTime(); t + step <= winEnd.getTime(); t += step) {
        const s = new Date(t);
        const e = new Date(t + step);
        if (s < earliest) continue;
        const clash = busy.some(function (b) { return s < b.end && e > b.start; });
        if (!clash) slots.push(s.toISOString());
      }
    });
  }
  return slots;
}

/** Busy intervals from the calendar (timed events only; all-day events such as holidays don't block). */
function busyIntervals_(from, to) {
  const events = CalendarApp.getCalendarById(CONFIG.calendarId === 'primary' ? Session.getEffectiveUser().getEmail() : CONFIG.calendarId)
    .getEvents(from, to);
  return events
    .filter(function (ev) { return !ev.isAllDayEvent() && ev.getTransparency() !== CalendarApp.EventTransparency.TRANSPARENT; })
    .map(function (ev) { return { start: ev.getStartTime(), end: ev.getEndTime() }; });
}

/** "2026-11-24" + "20:00" (IST) -> Date. "24:00" means midnight at the end of that day. */
function istDate_(ymd, hm) {
  if (hm === '24:00') return new Date(new Date(ymd + 'T00:00:00+05:30').getTime() + 86400000);
  return new Date(ymd + 'T' + hm + ':00+05:30');
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Run once from the editor to check the slot logic and trigger the permission prompt. */
function testSlots() {
  const s = freeSlots_();
  Logger.log(s.length + ' free slots. First few: ' + s.slice(0, 5).join(', '));
}
