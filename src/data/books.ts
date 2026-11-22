export interface Book {
	title: string;
	author: string;
	/** "reading" = on the go now (shown first, with a label); "read" = finished. */
	status: "reading" | "read";
	/** ISBN-10 or ISBN-13, used to fetch the cover from Open Library. */
	isbn?: string;
	/** Cover image URL; overrides the Open Library lookup. */
	cover?: string;
	/** Year finished, e.g. 2026. */
	year?: number;
}

/**
 * Currently reading first, then finished books, most recent first.
 * The home page shows all of them in one sideways-scrolling shelf.
 * While this array is empty, the shelf and the /books/ page stay hidden.
 */
export const books: Book[] = [
	// AI, ML and data science
	{
		title: "AI Engineering",
		author: "Chip Huyen",
		status: "read",
		cover: "https://covers.openlibrary.org/b/id/15091156-M.jpg",
	},
	{
		title: "Build a Large Language Model (From Scratch)",
		author: "Sebastian Raschka",
		status: "read",
		cover: "https://covers.openlibrary.org/b/id/15225524-M.jpg",
	},
	{
		title: "Building LLMs for Production",
		author: "Louis-François Bouchard",
		status: "read",
		cover: "/books/bouchard-llms-production.jpg",
	},
	{
		title: "System Design for the LLM Era",
		author: "Sampriti Mitra",
		status: "read",
		cover: "/books/mitra-llm-systems-design.jpg",
	},
	{
		title: "Deep Learning: Foundations and Concepts",
		author: "Christopher M. Bishop",
		status: "read",
		cover: "/books/bishop-deep-learning.jpg",
	},
	{
		title: "Speech and Language Processing",
		author: "Dan Jurafsky & James H. Martin",
		status: "read",
		cover: "https://covers.openlibrary.org/b/id/85431-M.jpg",
	},
	{
		title: "Deep Learning for Natural Language Processing",
		author: "Jason Brownlee",
		status: "read",
		cover: "/books/brownlee-dl-nlp.jpg",
	},
	{
		title: "An Introduction to Statistical Learning",
		author: "Gareth James et al.",
		status: "read",
		cover: "https://covers.openlibrary.org/b/isbn/9781071614174-M.jpg",
	},
	// Philosophy and history
	{
		title: "Sapiens",
		author: "Yuval Noah Harari",
		status: "read",
		cover: "https://covers.openlibrary.org/b/id/8634250-M.jpg",
	},
	{
		title: "Sophie's World",
		author: "Jostein Gaarder",
		status: "read",
		cover: "https://covers.openlibrary.org/b/id/10563354-M.jpg",
	},
	{
		title: "An Introduction to Political Philosophy",
		author: "Jonathan Wolff",
		status: "read",
		cover: "https://covers.openlibrary.org/b/id/120180-M.jpg",
	},
	{
		title: "Thought Experiments",
		author: "Roy A. Sorensen",
		status: "read",
		cover: "https://covers.openlibrary.org/b/id/124629-M.jpg",
	},
	{
		title: "God's Debris",
		author: "Scott Adams",
		status: "read",
		cover: "https://covers.openlibrary.org/b/id/469556-M.jpg",
	},
	{
		// No cover on Open Library yet; the shelf shows a title card instead.
		title: "Bodhidharma: The Greatest Zen Master",
		author: "Osho",
		status: "read",
	},
];

/** Cover URL for a book: explicit cover, else Open Library by ISBN. */
export const coverFor = (book: Book): string | undefined =>
	book.cover ?? (book.isbn ? `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg` : undefined);
