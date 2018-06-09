var express = require('express');
var app = express.Router();
var db = require('../fn/db');

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

app.get('/shop', function (req, res) {
  var query="select * from quanao";
  db.load(query).then(
  rows=>{
      var vm={
          ttsp:rows
      };
        res.render('shop',vm);
  })
});



app.get('/shop/hoodie', function (req, res) {
  
  var query="select * from quanao where maquanao like '%HD%'";
  db.load(query).then(
  rows=>{
      var vm={
          ttsp:rows
      };
        res.render('shop',vm);
  })
});


app.get('/shop/jacket', function (req, res) {
  
  var query="select * from quanao where maquanao like '%JK%'";
  db.load(query).then(
  rows=>{
      var vm={
          ttsp:rows
      };
        res.render('shop',vm);
  })
});

app.get('/shop/tshirt', function (req, res) {
  
  var query="select * from quanao where maquanao like '%TS%'";
  db.load(query).then(
  rows=>{
      var vm={
          ttsp:rows
      };
        res.render('shop',vm);
  })
});

app.get('/shop/somi', function (req, res) {
  
  var query="select * from quanao where maquanao like '%SM%'";
  db.load(query).then(
  rows=>{
      var vm={
          ttsp:rows
      };
        res.render('shop',vm);
  })
});


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

app.get('/product-detail', function (req, res) {
  var query="select * from quanao where maquanao = N'"+req.query.maquanao+"'";
  db.load(query).then(
  rows=>{
      var vm={
          ttsp:rows[0]
      };
      console.log(vm);
        res.render('product-detail',vm);
  });
});

module.exports = app;
