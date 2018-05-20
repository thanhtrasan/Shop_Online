var food=require('../models/Food');
var async=require('async')
// Display list of all Authors.
exports.food_list = function (req, res, next) {

    food.find({} ,function (err, list) {
            if (err)
            {
                return next(err);
            }
            if(list==null)
            {
                res.render('test', { title : 'KHONG CO SAN PHAM',list_food: null});
            }
            // Successful, so render.

            res.render('danhsachsp', { title : 'DANH SACH SAN PHAM ',list_food: list});
        }
    );
}
exports.food_detail = function(req, res, next) {

    food.findOne({'ID':req.params.ID} ,function (err, list) {
            if (err)
            {
                return next(err);
            }

            // Successful, so render.

                res.render('sanpham', { title : 'CHI TIET SAN PHAM ',name: list.name,price:list.price});
        }
    );
};
