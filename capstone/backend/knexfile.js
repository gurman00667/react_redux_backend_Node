// Update with your config settings.
require ('dotenv').config();
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB,
      user:     process.env.USERNAME,
      password: process.env.PSWRD
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'process.env.DB',
      user:     'process.env.USERNAME',
      password: 'process.env.PSWRD'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
