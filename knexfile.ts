import type { Knex } from 'knex';
type dbEnv = 'development' | 'production';

const config: Record<dbEnv, Knex.Config> = {
  development: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
      directory: './src/db/migrations',
      loadExtensions: ['.ts']
    },
    seeds: {
      directory: './src/db/seeds',
      loadExtensions: ['.ts']
    }
  },
  production: {}
};

export default config;
