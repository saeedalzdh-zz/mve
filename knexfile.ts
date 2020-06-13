module.exports = {
  
  development: {
    client: "mysql",
    connection: {
      // host: '127.0.0.1',
      // port: 33060,
      user: 'user',
      password: 'supersecret',
      database: 'todo',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "migrations"
    }
  },

};
