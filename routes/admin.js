var express = require('express');
var router = express.Router();

var db=require('../fn/admin/quan_ao_controller');
var tk=require('../fn/admin/taikhoan_controller')
/* GET users listing. */
router.get('/',db.getdata_control );
// get du lieu bang quan ao
router.get('/quanao',db.getdata_control );
// tim kiem bang quan ao
router.post('/quanao',db.search_control);
// them du lieu bang quan ao
router.get('/add_product',db.get_add_control );
router.post('/add_product',db.add_control );
// updatete bang quan ao
router.get('/update_product',db.get_update_control);
router.post('/update_product',db.update_control);
// xoa quan ao
router.get('/delete_product',db.delete_control );


// xu li tai khoan
router.get('/taikhoan',tk.danhsachtk);
router.get('/taikhoan/delete',(req,res)=>
{
    console.log(req.query.id);
    var vm={
        isLogin:req.session.isLogin,
        user:req.session.user,
        layout:'admin'
    }
    res.render('taikhoan',vm);
});
module.exports = router;
