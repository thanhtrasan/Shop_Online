var express = require('express');
var router = express.Router();
var db=require('../fn/db');
/* GET users listing. */
router.get('/data', function(req, res, next) {

    var query="select * from quanao";

    db.load(query).then(

        rows=>{

            console.log(rows);
            res.render('admin/table',{info:rows,layout:'admin'});
        })

});

router.get('/', function(req, res, next) {

    var query="select * from quanao limit 1";

    db.load(query).then(

        rows=>{

            console.log(rows);
            res.render('admin/form',{info:rows,layout:'admin'});
        })

});

module.exports = router;
