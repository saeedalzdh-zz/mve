const db = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 13300,
        user: 'root',
        password: 'supersecret',
        database: 'todo',
    },
});

export default db;
