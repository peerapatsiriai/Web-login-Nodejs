var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbmember"
});

con.connect(function(err) {

    module.exports.login = (user,pass,callback) => {
      let sql = `SELECT * FROM tb_user WHERE usr_username = '${user}' AND usr_password = '${pass}'`
      con.query(sql, function (err, result) {
        if (err) throw err;
        callback(result);
      });
    }// end display
    
  });
