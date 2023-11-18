import type { Knex } from 'knex';

export async function up(knex: Knex) {
  await knex.schema.createTable('entries', (table) => {
    table.increments('id');
    table.integer('book_id').unsigned().notNullable();
    table.foreign('book_id').references('id').inTable('books');
    table.integer('page_count').notNullable();
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex) {
  await  knex.schema.dropTable('entries');
}

