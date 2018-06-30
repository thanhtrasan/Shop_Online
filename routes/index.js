var express = require('express');
var app = express.Router();

var db1=require('../fn/db');
var db=require('../fn/quan_ao_controller');
var tk=require('../fn/taikhoan_controller')
var local=require('../fn/local_controller');
var giohang=require('../fn/admin/giohang_controller');
/* GET home page. */


// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


app.get('/',local.index_control );

app.get('/index', local.index_control);

app.get('/shop',db.shop_control);



app.get('/shop/hoodie', db.shop_hoodie_control);


app.get('/shop/jacket', db.shop_jacket_control);

app.get('/shop/tshirt',db.shop_tshirt_control);

app.get('/shop/somi', db.shop_somi_control);

app.get('/shop/jean', db.shop_jean_control);

app.get('/shop/short', db.shop_short_control);

app.get('/shop/thun',db.shop_thun_control);


app.get('/about', function (req, res) {
    var vm={

        isLogin: req.session.isLogin,
        user: req.session.user
    };
  res.render('about',vm);
});

app.get('/add-to-wishlist',local.them_control);
app.get('/xoaitem',local.xoa_item_control)

app.get('/blog', function (req, res) {
    var vm={

        isLogin: req.session.isLogin,
        user: req.session.sanpham
    };
  res.render('blog',vm);
});

app.get('/contact', );

app.get('/cart', function (req, res) {
    var vm={

        isLogin: req.session.isLogin,
        user: req.session.user
    };
  res.render('cart',vm);
});

app.get('/checkout', function (req, res) {
    var vm={

        isLogin: req.session.isLogin,
        user: req.session.user
    };
  res.render('checkout',vm);
});

app.get('/order-complete', function (req, res) {
    var vm={

        isLogin: req.session.isLogin,
        user: req.session.user
    };
  res.render('order-complete',vm);
});

app.get('/product-detail',db.product_detail_control);

//resgiter

app.get('/register',tk.get_resgister_control);
app.post('/register',tk.resgister_control);

app.post('/login', function (req, res) {
    var data= req.body;
    var sql="select username,id "+
        "from taikhoan "+
        "where email = '"+data.email+"' " +
        "and password = '"+data.password+"'";

    db1.load(sql).then( rows=>{
        if(rows.length>0)
        {

            req.session.user=rows[0];
            req.session.isLogin=true;


            res.redirect('/shop');
        }
        else
        {
            res.render('user/login');
        }
    });

});


module.exports = app;
