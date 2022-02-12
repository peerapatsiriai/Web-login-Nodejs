var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dog_coin"
});

con.connect(function(err) {

    module.exports.login = (user,pass,callback) => {
      let sql = `SELECT * FROM db_test WHERE user_name = '${user}' AND user_password = '${pass}'`
      con.query(sql, function (err, result) {
        if (err) throw err;
        callback(result);
      });
    }// end display

  });
