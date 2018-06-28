var express = require('express');
var router = express.Router();
var db=require('../fn/db');
var ad=require('../models/admin/quanao_model');
/* GET users listing. */
// get du lieu bang quan ao
router.get('/quanao', function(req, res, next) {

    var query="select * from quanao";

    db.load(query).then(

        rows=>{


            res.render('admin/quanao',{info:rows,layout:'admin'});
        })

});
// tim kiem bang quan ao
router.post('/quanao', function(req, res, next) {

    var query="%"+req.body.search+"%";
    console.log(query);
    var query="select * from quanao where ten like N'"+query+"' or maquanao like N'"+query+"'";

    db.load(query).then(

        rows=>{

                res.render('admin/quanao', {info: rows, layout: 'admin'});


        });

});
// them du lieu bang quan ao
router.get('/add_product', function(req, res, next) {

            res.render('admin/quanao_create',{title: 'Add Product',layout:'admin'});
});
router.post('/add_product', function(req, res, next) {

    ad.add(req.body.maquanao,req.body.ten,req.body.giaca,req.body.mausac,req.body.loai,req.body.gioitinh,
        req.body.malink,req.body.size,req.body.mainpic,req.body.malink1,req.body.malink2,req.body.malink3,req.body.mota)

});
// updatete bang quan ao
router.get('/update_product', function(req, res, next) {

               res.render('admin/quanao_update',{title:'Cập nhật sản phẩm',layout:'admin'});


});
router.post('/update_product', function(req, res, next) {

    ad.update(req,res);

});
// xoa quan ao
router.get('/delete_product', function(req, res, next) {

    res.render('admin/quanao_delete',{layout:'admin'});


});
router.post('/delete_product', function(req, res, next) {

    ad.delete(req,res);


});
module.exports = router;
