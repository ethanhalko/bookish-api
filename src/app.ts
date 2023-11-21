import express from 'express';
import knexConstructor from 'knex';
import { getKnexConfig } from './knex';
import booksRouter from './routes/books';
import { validateBookRequest } from './middleware/books';

const port = process.env.PORT || 3005;
const app = express();
const config = getKnexConfig(process.env.NODE_ENV);
export const knex = knexConstructor(config);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Nothing here!');
});

app.use('/books', validateBookRequest, booksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
