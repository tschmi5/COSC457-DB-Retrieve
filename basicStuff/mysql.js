var mysql = require("mysql");


var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Cosc*n6nq",
  database: "Car_Dealership"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
