import type { Knex } from 'knex';

export async function up(knex: Knex) {
  await knex.schema.createTable('authors', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('bio');
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex) {
  await knex.schema.dropTable('authors');
}

