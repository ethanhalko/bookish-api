import { Router as _router } from 'express';
import { BooksController } from '@/controllers/books';
import { validateBookRequest } from '@/middleware/books';

const router = _router();
const booksController = new BooksController();

router.post('/', validateBookRequest, booksController.create);
router.get('/:isbn', booksController.find);
router.get('/', booksController.index);
router.delete('/:isbn', booksController.delete);

export default router;
