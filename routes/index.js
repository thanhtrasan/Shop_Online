var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home.html', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/', function(req,res){
  res.redirect('/home.html')
});

router.get('/index.html', function(req,res,next){
  res.redirect('/home.html')
});

router.get('/menu.html', function(req, res, next) {
  res.render('menu', { title: 'Menu' });
});

router.get('/pizzas.html', function(req, res, next) {
  res.render('pizzas', { title: 'Pizzas' });
});
router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/blog.html', function(req, res, next) {
  res.render('blog', { title: 'Blog' });
});
router.get('/contact.html', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/a', function(req, res, next) {
  res.render('a.html', { title: 'Contact' });
});

module.exports = router;
