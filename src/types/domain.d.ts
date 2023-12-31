import 'knex/types/tables';

declare module 'knex/types/tables' {
  interface Timestamps {
    created_at?: string;
    updated_at?: string;
  }

  interface Author extends Timestamps {
    id: number;
    name: string;
    open_library_id: string;
    bio?: string;
  }

  interface Book extends Timestamps {
    id: number;
    title: string;
    author: Author[];
    page_count: number;
    description?: string;
    cover_url?: string;
    isbn: string;
    olid: string;
  }

  interface Entry extends Timestamps {
    id: number;
    book: Book;
    page_count: number;
  }

  interface User extends Timestamps {
    name: string;
    email: string;
    bio?: string;
    location?: string;
    books?: Book[];
  }

  interface Goal extends Timestamps {
    id: number;
    user: User;
    start_date: Date;
    end_date: Date;
  }

  interface BookAuthor extends Timestamps {
    id: number;
    book_id: Book['id'];
    author_id: Author['id'];
  }

  interface Tables {
    authors: Author;
    books: Book;
    entries: Entry;
    users: User;
    goals: Goal;
    books_authors: BookAuthor;
  }
}
