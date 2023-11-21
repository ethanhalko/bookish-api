import { BooksApi } from '~/resources/api/open-library';
import { AuthorsApi } from '~/resources/api/open-library';

export async function fetchBookData(isbn: string) {
  const booksApi = new BooksApi();

  const res = await booksApi
    .readApiBooksApiBooksGet(isbn, 'json', null, 'data')
    .catch(e => console.error(e));

  return res?.data[isbn] || null;
}

export async function fetchAuthorData(olid: string) {
  const authorsApi = new AuthorsApi();

  const res = await authorsApi
    .readAuthorsAuthorsOlidJsonGet(olid)
    .catch(e => console.error(e));

  return res?.data;
}
