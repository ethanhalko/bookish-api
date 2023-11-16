import type { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
  knex.schema.createTable('goals', (table) => {
    table.increments('id');
    table.foreign('user_id').references('id').inTable('users');
    table.dateTime('start_date').notNullable();
    table.dateTime('end_date').notNullable();
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable('goals');
}

