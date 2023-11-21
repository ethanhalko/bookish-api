import { validateBookRequest } from '@/middleware/books';
import type { Request, Response, NextFunction } from 'express';
import { vi, expect, it } from 'vitest';

vi.mock('knex');

const { getBook } = vi.hoisted(() => {
  return {
    getBook: vi.fn().mockReturnValue(null)
  };
});

vi.mock('@/services/books', async (importOriginal) => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  const mod = await importOriginal<typeof import('@/services/books')>();

  return {
    ...mod,
    getBook
  };
});

const req = { body: { isbn: '1234567890' } } as Request;
const res = { status: vi.fn().mockReturnThis(), json: vi.fn() } as unknown as Response;
const next = vi.fn() as unknown as NextFunction;

it('returns 400 status if isbn is missing', async () => {
  const req = { body: {} } as Request;

  await validateBookRequest(req, res, next);

  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    error: 'Missing required parameter `isbn`',
  });
});

it('returns 404 status if book is not found', async () => {
  await validateBookRequest(req, res, next);

  expect(res.status).toHaveBeenCalledWith(404);
  expect(res.json).toHaveBeenCalledWith({
    error: 'Book not found',
  });
});

it('calls next function if book is found', async () => {
  getBook.mockReturnValue({ id: 123 });

  const req = { body: { isbn: '1234567890' } } as Request;

  await validateBookRequest(req, res, next);

  expect(next).toHaveBeenCalled();
});
