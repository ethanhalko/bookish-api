import type { Request, Response } from '../types';

export class BooksController {
  public getBook(req: Request, res: Response): void {
    res.send('Hello World!');
  }
}
