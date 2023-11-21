import type { NextFunction } from 'express';
import type { Request, Response } from '@/types';
import { getBook } from '@/services/books';

export async function validateBookRequest(req: Request, res: Response, next: NextFunction) {
  const { isbn } = req.body;
  if (!isbn) {
    res.status(400);

    return res.json({
      error: 'Missing required parameter `isbn`',
    });
  }

  const book = await getBook(isbn);

  if (!book) {
    res.status(404);

    return res.json({
      error: 'Book not found',
    });
  }

  next();
}
