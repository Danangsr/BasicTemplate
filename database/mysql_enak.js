 module.exports.connection = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'sawunggaling26a',
    database : '2021_balai_jakon_jkt'
  }
});