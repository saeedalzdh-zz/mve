module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            port: 13300,
            user: 'root',
            password: 'supersecret',
            database: 'todo',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'migrations',
        },
    },
};
