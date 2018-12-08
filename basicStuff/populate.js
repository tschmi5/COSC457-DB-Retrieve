var CRUD = require("./crud");
var DBconnect = require("./DBconnect");

{
  var crud = new CRUD;
  var cnx = new DBconnect("127.0.0.1", "root", "Cosc*n6nq", "company");
  cnx.connect();

  var table = "wo";
  var cols = [];
  var data = [];
  var constraints = ["pno = 14", "essn = 111111111"];
}




console.log(crud.updateData(table, constraints[0], constraints[1]));

cnx.query(crud.updateData(table, constraints[0], constraints[1]), function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

