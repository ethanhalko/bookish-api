export async function up(knex){
  await knex.schema.createTable('goals', (table) => {
    table.increments('id');
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.dateTime('start_date').notNullable();
    table.dateTime('end_date').notNullable();
    table.timestamps(true, true);
  });
}


export async function down(knex){
 await knex.schema.dropTable('goals');
}

