var express = require('express');
var router = express.Router();
var sql = require("../models/comman");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/login');
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  var title = "Main Page"
  res.render('page_login', {title});
});


/* post checklogin page. */
router.post('/checklogin', function(req, res, next) {
  var count = 0;
  var id = req.body.Username
  var pass = req.body.Password
  sql.login(id,pass,(data,err) => {
    if (err) throw err;
    data.forEach(element => {
      count++;
    });
    if (count > 0) {
      res.redirect('/content');
      module.exports.userSession = data;
    } else {
      var title = "NotFound User"
      res.render('page_login',{title});
    }
  })
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register',{alert:""});
});


/* post register page. */
router.post('/register', function(req, res, next) {
  let name = req.body.name
  let email = req.body.email
  let password = req.body.password
  let re_password = req.body.re_password
  if (password === re_password) {
    // Insert
    sql.register(name, password, email)
    res.redirect('/login');
  } else {
    res.render('register',{alert:"Your password"});
  }
});


module.exports = router;
