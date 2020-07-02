import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('tasks', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('tasks');
}
