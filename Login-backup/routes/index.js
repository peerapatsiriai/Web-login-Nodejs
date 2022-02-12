var express = require('express');
var router = express.Router();
var sql = require("../models/comman");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/login');
});

module.exports = router;