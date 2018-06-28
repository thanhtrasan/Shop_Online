var express = require('express');
var router = express.Router();
var db=require('../fn/db');
var ad=require('../models/admin/quanao_model');
/* GET users listing. */
router.get('/data', function(req, res, next) {

    var query="select * from quanao";

    db.load(query).then(

        rows=>{

            console.log(rows);
            res.render('admin/data',{info:rows,layout:'admin'});
        })

});
router.get('/add', function(req, res, next) {

            res.render('admin/quanao_create',{title: 'Add Product',layout:'admin'});
});
router.post('/add', function(req, res, next) {

    ad.add(req.body.maquanao,req.body.ten,req.body.giaca,req.body.mausac,req.body.loai,req.body.gioitinh,
        req.body.malink,req.body.size,req.body.mainpic,req.body.malink1,req.body.malink2,req.body.malink3,req.body.mota)
    res.end();
});

module.exports = router;
