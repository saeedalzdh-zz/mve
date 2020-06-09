import knex from 'knex';

export default knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 13300,
        user: 'user',
        password: 'supersecret',
        database: 'TODO',
    },
});
