import type { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
  knex.schema.createTable('authors', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('bio');
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable('authors');
}

