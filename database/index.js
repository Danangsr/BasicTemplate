
/*
 * GET home page.
 */
// import database

 var mysql      = require('mysql');

module.exports.connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port	   : '3306',
  password : 'sawunggaling26a',
  database : '2021_balai_jakon_jkt'
});
