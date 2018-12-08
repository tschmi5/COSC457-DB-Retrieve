var mysql = require("mysql");

var DBconnect = function (h,u,p,d) {
    return mysql.createConnection({
        host: h,
        user: u,
        password: p,
        database: d
    });
}

    module.exports = DBconnect;

