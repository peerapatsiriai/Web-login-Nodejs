var mysql = require('mysql');
// postgres://oqdipgvsuwtfie:f0b298e80afe75287ee9d2826fa1a01cec4f2ee6476d03085df1c81342ce4051@ec2-52-54-212-232.compute-1.amazonaws.com:5432/de3t1d2bac0lc0
var con = mysql.createConnection({
    host: "ec2-52-54-212-232.compute-1.amazonaws.com",
    user: "oqdipgvsuwtfie",
    password: "f0b298e80afe75287ee9d2826fa1a01cec4f2ee6476d03085df1c81342ce4051",
    database: "de3t1d2bac0lc0"
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
