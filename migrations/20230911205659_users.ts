import type { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('status');
    table.string('bio');
    table.string('location');
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}

