import { jest, expect, test } from '@jest/globals';
import { validateBookRequest } from '@/middleware/books';
import type { Request, Response, NextFunction } from 'express';
import { getBook } from '@/services/books';

jest.mock('@/services/books');
jest.mock('knex');

const req = { body: { isbn: '1234567890' } } as Request;
const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;
const next = jest.fn() as NextFunction;

test('returns 400 status if isbn is missing', async () => {
  const req = { body: {} } as Request;

  await validateBookRequest(req, res, next);

  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    error: 'Missing required parameter `isbn`',
  });
});

test('returns 400 status if book already exists', async () => {
  // @ts-expect-error - figure this out
  (getBook as jest.Mock).mockResolvedValue({ id: 123 });

  await validateBookRequest(req, res, next);

  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    error: 'Book already exists',
  });
});

test('calls next function if book does not exist', async () => {
  // @ts-expect-error - figure this out
  (getBook as jest.Mock).mockResolvedValue(null);

  await validateBookRequest(req, res, next);

  expect(next).toHaveBeenCalled();
});
