import type { BooksApiAuthor } from '@/types/open-library';
import type Bookish from 'knex/types/tables';
import { knex } from '@/app';
import { fetchAuthorData } from '@/services/open-library';

async function getAuthorData(olid: string) {
  const author = await fetchAuthorData(olid);

  return { name: author.name, bio: author.bio, open_library_id: olid };
}

function getExistingAuthors(ids: string[]) {
  try {
    return knex
      .select('id', 'open_library_id')
      .from('authors')
      .whereIn('open_library_id', ids);

  } catch (e) {
    console.error('error getting existing authors', e);
  }

  return [];
}

// Find existing authors by open_library_id and return the ones that don't exist
export async function processBookAuthors(bookAuthors: BooksApiAuthor[]) {
  const authorIds = bookAuthors.map((author) => author.url?.split('/').reverse()[1]);
  const existingAuthors = await getExistingAuthors(authorIds);
  const newIds = authorIds.filter((id) => !existingAuthors.find((existing) => existing.open_library_id === id));

  const authors = newIds.map(async (id) => {
    return await getAuthorData(id);
  });

  return Promise.all(authors);
}

export async function createAuthors(bookIds: Record<'id', number>[], bookAuthors: BooksApiAuthor[]) {
  const authors = await processBookAuthors(bookAuthors);
  // @ts-ignore
  const authorIds = await knex('authors').insert(authors).returning('id');
  const toInsert: Omit<Bookish.BookAuthor, 'id'>[] = [];

  bookIds.forEach((bookId) => {
    const author = authorIds.
      map((authorId) => ({ book_id: bookId.id, author_id: authorId.id }));

    toInsert.push(...author);
  });

  await knex('books_authors').insert(toInsert);
}
