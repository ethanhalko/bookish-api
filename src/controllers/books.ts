import type { Request, Response } from '../types';
import { createBook, deleteBook, getBook, getAllBooks } from '../services/books';
import { fetchBookData } from '../services/open-library';
import { createAuthors } from '../services/authors';

export class BooksController {
  public async index(req: Request, res: Response): Promise<void> {
    const books = await getAllBooks();

    res.status(200).json(books);
  }

  public async create(req: Request, res: Response): Promise<void> {
    const { isbn } = req.body;

    const bookData = await fetchBookData(isbn);

    if (!bookData) {
      res.status(404).json({ message: 'Book not found' });

      return;
    }

    const book = await createBook(bookData);
    await createAuthors(book, bookData.authors);

    res.status(200).json({ message: 'Book created', book });
  }

  public async find(req: Request, res: Response): Promise<void> {
    const { isbn } = req.params;
    const book = await getBook(isbn);

    if (!book) {
      res.status(404).json({ message: 'Book not found' });

      return;
    }

    res.status(200).json(book);
  }

  public async delete({ params }: Request, res: Response): Promise<void> {
    const { isbn } = params;

    if (!await getBook(isbn)) {
      res.status(404).json({ message: 'Book not found' });

      return;
    }

    await deleteBook(isbn);

    res.status(200).json({ message: 'Book deleted' });
  }
}
