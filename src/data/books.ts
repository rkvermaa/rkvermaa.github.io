export interface Book {
	title: string;
	author: string;
	/** ISBN-10 or ISBN-13, used to fetch the cover from Open Library. */
	isbn?: string;
	/** Cover image URL; overrides the Open Library lookup. */
	cover?: string;
	/** Year finished, e.g. 2026. */
	year?: number;
}

/** Most recently read first. The home shelf shows the first five. While this
 *  array is empty, the books shelf and the /books/ page stay hidden. */
export const books: Book[] = [];

/** Cover URL for a book: explicit cover, else Open Library by ISBN. */
export const coverFor = (book: Book): string | undefined =>
	book.cover ?? (book.isbn ? `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg` : undefined);
