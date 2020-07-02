import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
    return knex('tasks')
        .del()
        .then(() => {
            return knex('tasks').insert([
                { id: 1, title: 'Task 1' },
                { id: 2, title: 'Task 2' },
                { id: 3, title: 'Task 3' },
            ]);
        });
}
