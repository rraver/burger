const mysql = require('mysql');

//Connect to the datase with parameters
const connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'axw8DdYJ!',
  database: 'burgers_db',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
