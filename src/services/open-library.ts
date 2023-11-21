import { BooksApi } from '~/resources/api/open-library';
import { AuthorsApi } from '~/resources/api/open-library';

export async function fetchBookData(isbn: string) {
  const booksApi = new BooksApi();
  const isbnFormatted = `ISBN:${isbn}`;

  const res = await booksApi
    .readApiBooksApiBooksGet(isbnFormatted, 'json', null, 'data')
    .catch(e => console.error(e));

  return res?.data[isbnFormatted] || null;
}

export async function fetchAuthorData(olid: string) {
  const authorsApi = new AuthorsApi();

  const res = await authorsApi
    .readAuthorsAuthorsOlidJsonGet(olid)
    .catch(e => console.error(e));

  return res?.data;
}
