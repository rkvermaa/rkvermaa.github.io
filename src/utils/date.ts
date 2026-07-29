import { siteConfig } from "@/site-config";

const dateFormat = new Intl.DateTimeFormat(siteConfig.date.locale, siteConfig.date.options);

const railFormatter = new Intl.DateTimeFormat("en-US", {
	day: "numeric",
	month: "short",
	year: "numeric",
});

const stampFormatter = new Intl.DateTimeFormat("en-US", {
	month: "long",
	year: "numeric",
});

const bylineFormatter = new Intl.DateTimeFormat("en-GB", {
	day: "numeric",
	month: "long",
	year: "numeric",
});

const eyebrowFormatter = new Intl.DateTimeFormat("en-US", {
	month: "long",
	year: "numeric",
});

export function getFormattedDate(
	date: string | number | Date,
	options?: Intl.DateTimeFormatOptions,
): string {
	if (typeof options !== "undefined") {
		return new Date(date).toLocaleDateString(siteConfig.date.locale, {
			...(siteConfig.date.options as Intl.DateTimeFormatOptions),
			...options,
		});
	}

	return dateFormat.format(new Date(date));
}

/** Short rail date: `5 Mar 2026`. */
export function formatRailDate(date: Date): string {
	return railFormatter.format(date);
}

/** Featured-card stamp: `March 2026`. */
export function formatStampDate(date: Date): string {
	return stampFormatter.format(date);
}

/** Article byline date: `5 March 2026`. */
export function formatBylineDate(date: Date): string {
	return bylineFormatter.format(date);
}

/** Article eyebrow date: `March 2026`. */
export function formatEyebrowDate(date: Date): string {
	return eyebrowFormatter.format(date);
}

const monthYearFormatter = new Intl.DateTimeFormat("en-US", {
	month: "short",
	year: "numeric",
});

/**
 * Parse a `YYYY-MM` (or `YYYY`) string as a local date. `new Date("2025-08")`
 * would be parsed as UTC and can shift a month backwards west of Greenwich.
 */
function parseYearMonth(value: string): Date {
	const [rawYear = "", rawMonth = "1"] = value.split("-");
	const year = Number.parseInt(rawYear, 10);
	const month = Number.parseInt(rawMonth, 10);
	return new Date(Number.isNaN(year) ? 1970 : year, (Number.isNaN(month) ? 1 : month) - 1, 1);
}

/** Résumé date range from `YYYY-MM` values: `Aug 2025 — Present`. */
export function formatDateRange(start: string, end: string | "present"): string {
	const from = monthYearFormatter.format(parseYearMonth(start));
	const to = end === "present" ? "Present" : monthYearFormatter.format(parseYearMonth(end));
	return `${from} — ${to}`;
}

/** Education-style year range: `2016 — 2018`. */
export function formatYearRange(start: string, end: string | "present"): string {
	return `${start} — ${end === "present" ? "Present" : end}`;
}

/** Machine-readable duration for `<time datetime>`: `2025-08/..`. */
export function toDateTimeRange(start: string, end: string | "present"): string {
	return `${start}/${end === "present" ? ".." : end}`;
}
