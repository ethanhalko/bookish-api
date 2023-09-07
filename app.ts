// @ts-expect-error -- No clue right now
import knex from 'knex';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();

const knexConfig = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};

const knexInstance = knex(knexConfig);

app.use(knexInstance);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(new URL(import.meta.url).pathname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
