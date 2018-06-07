var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/register', function (req, res, next) {
  res.render('user/register');
});

router.get('/login', function (req, res, next) {
  res.render('user/login');
});
module.exports = router;
