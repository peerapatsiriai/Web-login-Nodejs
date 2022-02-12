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

    module.exports.register = (name, password, email) => {
      let sql = `INSERT INTO db_test (user_name, user_password, user_email) VALUES ('${name}', '${password}', '${email}');`
      con.query(sql, function (err) {
        if (err) throw err;
      });
    }
    
  });
