import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

  res.json({ data: 'respond with a resource' });
});

export default router;
