export interface ProfileConfig {
	/** Author display name; used in bylines, schema, OG images. */
	name: string;
	/** Contact email shown in About-page socials. Omit to hide. */
	email?: string;
	/** Profile URL on GitHub. Leave empty to hide. */
	github?: string;
	/** Profile URL on LinkedIn. Leave empty to hide. */
	linkedin?: string;
	/** Twitter / X profile URL. Leave empty to hide. */
	twitter?: string;
	/** Mastodon profile URL. Leave empty to hide. */
	mastodon?: string;
	/** Schema.org Person.jobTitle. */
	jobTitle?: string;
	/** Schema.org Person.worksFor.name (current employer). */
	employer?: string;
	/** Schema.org Person.worksFor.url. */
	employerUrl?: string;
	/** Schema.org Person.alumniOf.name. */
	alumni?: string;
	/** Absolute avatar/photo URL used in schema markup. */
	avatar?: string;
	/** Short headline shown under the name, e.g. "Full-Stack AI Engineer". */
	tagline?: string;
	/** Phone number in display form. Omit to hide. */
	phone?: string;
	/** City / country, shown on the contact page. Omit to hide. */
	location?: string;
	/** Medium profile URL. Leave empty to hide. */
	medium?: string;
	/** Path to a downloadable résumé under `public/`. Omit to hide. */
	resume?: string;
}

/** Web3Forms-backed contact form. Omit to render contact details only. */
export interface ContactConfig {
	/**
	 * Web3Forms access key. This is a publishable client-side key — it names the
	 * destination inbox, not the sender — so it ships in the built HTML by design.
	 * Rotate it at https://web3forms.com if it starts attracting spam.
	 */
	web3formsKey: string;
}

/** A child entry inside a nav dropdown. */
export interface MenuChild {
	path: string;
	title: string;
}

/** A top-level nav entry. Omit `path` to make it a pure dropdown trigger. */
export interface MenuLink {
	path?: string;
	title: string;
	/** Key into `navIcons` in Header.astro. Dropdown triggers need this since
	 *  they have no `path` to look an icon up by. */
	icon?: string;
	children?: MenuChild[];
}

/** Optional analytics config — each provider is opt-in. */
export interface AnalyticsConfig {
	/** Google Analytics measurement id (e.g. "G-XXXXXXX"). */
	googleAnalyticsId?: string;
	/** Goatcounter endpoint URL (e.g. "https://example.goatcounter.com/count"). */
	goatcounterUrl?: string;
}

export interface SiteConfig {
	/** Site-wide display name; fallback for profile.name. */
	author: string;
	date: {
		locale: string | string[] | undefined;
		options: Intl.DateTimeFormatOptions;
	};
	/** Meta description — keep it under ~160 characters for search results. */
	description: string;
	/** Multi-paragraph home-page hero copy. Blank lines are preserved. */
	intro?: string;
	lang: string;
	ogLocale: string;
	title: string;
	/** Personal info for About page, schema, byline. */
	profile?: ProfileConfig;
	/** Contact form settings; the form is skipped if absent. */
	contact?: ContactConfig;
	/** Analytics; each provider opt-in. */
	analytics?: AnalyticsConfig;
	hideThemeCredit?: boolean;
}

export interface SiteMeta {
	articleDate?: string | undefined;
	description?: string;
	ogImage?: string | undefined;
	title: string;
}

export type AdmonitionType = "tip" | "note" | "important" | "caution" | "warning";
