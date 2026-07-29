export interface WritingLink {
	title: string;
	/** Absolute URL to the article. */
	href: string;
	/** `YYYY-MM-DD` or `YYYY-MM`. Omit to hide the date. */
	date?: string;
	/** Where it was published, e.g. "Medium". */
	source?: string;
	/** One-line summary shown under the title. */
	description?: string;
}

/**
 * Articles published elsewhere. While this array is empty the "Writing" nav
 * item and page hide themselves — same behaviour as an empty `projects` list.
 */
export const writing: WritingLink[] = [];
