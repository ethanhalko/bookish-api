import { Router } from 'express';
import { IndexController } from '../controllers/index';

const router = Router();
const indexController = new IndexController();

router.get('/', indexController.getIndex);

export const setRoutes = (app: any) => {
  app.use('/', router);
};