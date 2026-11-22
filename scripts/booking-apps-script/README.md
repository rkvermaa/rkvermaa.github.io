# Booking backend (Google Apps Script)

Powers the custom booking page at `/book/`. Runs inside Ravi's Google account
(project **"ravikverma.com booking"** at script.google.com).

- `GET  <URL>?action=slots`: free 20-minute slots for the next 3 weeks, busy times removed
- `POST <URL>` with JSON `{ start, name, email, topic }`: creates a Google Calendar event with a
  Google Meet link and emails the invite to the guest and to Ravi

## Deployment

- Deployment ID: `AKfycbxiKCF5kRucBHUpSS7c1lvp1s1RaAY4nUngQXlBnjxcxCdj4wkdrLHs-_8MNa9QH688Sw`
- Web app URL: `https://script.google.com/macros/s/AKfycbxiKCF5kRucBHUpSS7c1lvp1s1RaAY4nUngQXlBnjxcxCdj4wkdrLHs-_8MNa9QH688Sw/exec`
- Runs as: Ravi (rkverma87 Google account). Access: Anyone (no secrets in the URL).

The URL is used in `src/pages/book.astro` (`BOOKING_API`).

## Updating the script

1. Edit `Code.gs` here, then paste it into the Apps Script editor and save.
2. **Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy.**
   This keeps the same URL. Don't use "New deployment", which creates a new URL.

Weekly hours live in `CONFIG.hours` (IST). Region-specific windows shown to visitors live in
`src/pages/book.astro` (`REGIONS`).
