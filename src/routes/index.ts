import type { Express } from 'express';
import { Router as _router } from 'express';
import { IndexController } from '../controllers';

const router = _router();
const indexController = new IndexController();

router.get('/', indexController.getIndex);

export const setRoutes = (app: Express) => {
  app.use('/', router);
};
