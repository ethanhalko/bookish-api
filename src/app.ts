import express from 'express';
import knexConstructor from 'knex';
import { getKnexConfig } from './knex';
import booksRouter from './routes/books';

const app = express();
const config = getKnexConfig(process.env.NODE_ENV);
export const knex = knexConstructor(config);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Nothing here!');
});

app.use('/books', booksRouter);


export default app;
