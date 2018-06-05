var express = require('express');
var router = express.Router();



router.get('/', function (req, res) {
  res.render('index');
});

router.get('/shop', function (req, res) {
  res.render('shop');
});

router.get('/about', function (req, res) {
  res.render('about');
});

router.get('/add-to-wishlist', function (req, res) {
  res.render('add-to-wishlist');
});

router.get('/blog', function (req, res) {
  res.render('blog');
});

router.get('/contact', function (req, res) {
  res.render('contact');
});

router.get('/cart', function (req, res) {
  res.render('cart');
});

router.get('/checkout', function (req, res) {
  res.render('checkout');
});

router.get('/order-complete', function (req, res) {
  res.render('order-complete');
});

router.get('/product-detail', function (req, res) {
  res.render('product-detail');
});


module.exports = router;
