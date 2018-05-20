var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('../public/index.hbs', { title: 'Express' });
});

var food=require('../controllers/foodcontroller')
/* GET users listing. */

router.get('/',food.food_list);
router.get('/:ID', food.food_detail);

module.exports = router;
