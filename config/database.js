const database = {
  development: {
    username: 'front',
    password: '123456',
    database: 'front',
    host: '192.168.1.33',
    port: 27017,
    dialect: 'mongodb',
  },
  test: {
    username: 'front',
    password: 'Front2018',
    database: 'front',
    host: '101.37.135.54',
    port: 27017,
    dialect: 'mongodb',
  },
  production: {
    username: 'front',
    password: 'Front2018',
    database: 'front',
    host: '101.37.135.54',
    port: 27017,
    dialect: 'mongodb',
  },
}

module.exports = database
