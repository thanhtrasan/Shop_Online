var db=require('../fn/db.js');

module.exports.add_product=function(req,res){
res.end();
};
module.exports.shop=function (req, res)
{
    var query="select * from quanao";
    
    db.load(query).then(
        
        rows=>{

            var vm={
                ttsp:rows,
                isLogin: req.session.isLogin,
                user: req.session.user
            };

            res.render('shop',vm);
        })
};

module.exports.shop_hoodie=function (req, res) {

    var query="select * from quanao where maquanao like '%HD%'";
    db.load(query).then(
        rows=>{
            var vm={
                ttsp:rows,
                isLogin: req.session.isLogin,
                user: req.session.user
            };
            res.render('shop',vm);
        })
};

module.exports.shop_jacket=function (req, res) {

    var query="select * from quanao where maquanao like '%JK%'";
    db.load(query).then(
        rows=>{
            var vm={
                ttsp:rows,
                isLogin: req.session.isLogin,
                user: req.session.user
            };
            res.render('shop',vm);
        })
};

module.exports.shop_tshirt= function (req, res) {

    var query="select * from quanao where maquanao like '%TS%'";
    db.load(query).then(
        rows=>{
            var vm={
                ttsp:rows,
                isLogin: req.session.isLogin,
                user: req.session.user
            };
            res.render('shop',vm);
        })
};

module.exports.shop_somi=function (req, res) {

    var query="select * from quanao where maquanao like '%SM%'";
    db.load(query).then(
        rows=>{
            var vm={
                ttsp:rows,
                isLogin: req.session.isLogin,
                user: req.session.user
            };
            res.render('shop',vm);
        })
};

module.exports.shop_jean=function (req, res) {

    var query="select * from quanao where maquanao like '%QJ%'";
    db.load(query).then(
        rows=>{
            var vm={
                ttsp:rows,
                isLogin: req.session.isLogin,
                user: req.session.user
            };
            res.render('shop',vm);
        })
};

module.exports.shop_shot=function (req, res) {

    var query="select * from quanao where maquanao like '%QS%'";
    db.load(query).then(
        rows=>{
            var vm={
                ttsp:rows,
                isLogin: req.session.isLogin,
                user: req.session.user
            };
            res.render('shop',vm);
        })
};

module.exports.shop_thun=function (req, res) {

    var query="select * from quanao where maquanao like '%QT%'";
    db.load(query).then(
        rows=>{
            var vm={
                ttsp:rows,
                isLogin: req.session.isLogin,
                user: req.session.user
            };
            res.render('shop',vm);
        })
};

module.exports.product_detail=function (req, res) {
    var query="select * from quanao where maquanao = N'"+req.query.maquanao+"'";
    db.load(query).then(
        rows=>{
            var vm={
                ttsp:rows[0],
                isLogin: req.session.isLogin,
                user: req.session.user
            };
            console.log(vm);
            res.render('product-detail',vm);
        });
};