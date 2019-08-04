module.exports = {
  listener: {
    //port: 3001
  },
  database: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    pass: null,
    schema: 'art-auto',
    version: {
      select: 'select version()',
      get: '[0][0].version()'
    },
    dialect: 'mysql',
    logging: console.log // eslint-disable-line no-console
  }
}