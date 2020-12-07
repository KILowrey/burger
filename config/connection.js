// Set up MySQL connection.
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost", // god forbid you host somewhere else
  port: 3306, // or whatever port you use
  user: "root", // or your username (but why would you use something other than root?)
  password: "root", // if username is root password is also root. otherwise you're on your own
  database: "burgers_db"
});

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for the ORM to use.
module.exports = connection;