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
export const writing: WritingLink[] = [
	{
		title: "The Complete RAG Playbook",
		href: "https://medium.com/@rkverma87",
		source: "Medium",
		description: "A series on building retrieval-augmented generation that works in production. Part 1 ran in Towards AI.",
	},
];
