var express = require('express');
var router = express.Router();
var sql = require("../models/comman");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/login');
});

router.get('/login', function(req, res, next) {
  var title = "Main Page"
  res.render('page_login', { title });
});

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
      res.redirect('/');
    }
  })
});

module.exports = router;
