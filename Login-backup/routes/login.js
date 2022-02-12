var express = require('express');
var router = express.Router();
var sql = require("../models/comman");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login',{status:""});
});

router.post('/login', function(req, res, next) {
    var id = req.body.Username
    var pass = req.body.Password
    sql.login(id,pass,(data,err) => {
        if(err) throw err;
        let count = 0;
        data.forEach(object => {
            count++;
        });
        if (count >= 1) {
            res.redirect('/mainpage');
            return;
        } 
        res.render('login',{status:""});
    })
});


module.exports = router;