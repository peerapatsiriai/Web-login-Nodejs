var express = require('express');
var router = express.Router();
var sql = require("../models/comman");
var dataUser = require("../routes/index")


/* GET home page. */
router.get('/', function(req, res, next) {
var data = dataUser.userSession;
let Username = data[0].user_name;

  res.render('welcome',{Username:Username});
});


module.exports = router;
