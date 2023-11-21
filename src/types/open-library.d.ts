export interface BooksApiAuthor {
  name: string,
  url: string,
}

export interface BooksApiResponse {
  title: string;
  number_of_pages: number;
  description: string;
  identifiers: {
    isbn_13: string[];
    openlibrary: string[];
  };
  Authors: BooksApiAuthor[];
}
