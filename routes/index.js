var express = require('express');
var app = express.Router();


var db=require('../fn/quan_ao_controller');
var tk=require('../fn/taikhoan_controller')
/* GET home page. */


// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/index', function (req, res) {
  res.render('index');
});

app.get('/shop',db.shop_control);



app.get('/shop/hoodie', db.shop_hoodie_control);


app.get('/shop/jacket', db.shop_jacket_control);

app.get('/shop/tshirt',db.shop_tshirt_control);

app.get('/shop/somi', db.shop_somi_control);

app.get('/shop/jean', db.shop_jean_control);

app.get('/shop/short', db.shop_short_control);

app.get('/shop/thun',db.shop_thun_control);


app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/add-to-wishlist', function (req, res) {
  res.render('add-to-wishlist');
});

app.get('/blog', function (req, res) {
  res.render('blog');
});

app.get('/contact', function (req, res) {
  res.render('contact');
});

app.get('/cart', function (req, res) {
  res.render('cart');
});

app.get('/checkout', function (req, res) {
  res.render('checkout');
});

app.get('/order-complete', function (req, res) {
  res.render('order-complete');
});

app.get('/product-detail',db.product_detail_control);

//resgiter

app.get('/register',tk.get_resgister_control);
app.post('/register',tk.resgister_control);


module.exports = app;
