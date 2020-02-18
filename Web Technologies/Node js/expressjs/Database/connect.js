var mysql = require('mysql');

// connection configurations
var dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Dalrv@6546',
  database: 'nodejs'
});
// connect to database
dbConn.connect(); 

module.exports = dbConn;
