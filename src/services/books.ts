import type { BooksApiResponse } from '@/types/open-library';
import { knex } from '@/app';

export function getBook(isbn: string) {
  return knex.select('id').from('books').where('isbn', isbn).first();
}

export async function getAllBooks() {
  return knex.select().from('books');
}

export async function createBook(book: BooksApiResponse): Promise<Record<'id', number>[]> {
  return <Record<'id', number>[]> await knex('books')
    .returning('*')
    .insert({
      title: book.title,
      page_count: book.number_of_pages,
      description: book.description || '',
      isbn: book.identifiers?.isbn_13?.join(','),
      olid: book.identifiers?.openlibrary?.join(','),
    })
    .catch((e: Error) => {
      console.error(e);

      return {  };
    });
}

export async function deleteBook(isbn: string) {
  return knex('books').where('isbn', isbn).del();
}
