var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Bluemist1!",
      database: "burgers_db"
  });
};

//connects to my jawsdb and mysql db


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//throws error if there is an error, otherwise says connects to 

module.exports = connection;