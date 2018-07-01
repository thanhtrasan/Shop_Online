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
router.get('/taikhoan',tk.danhsachtk);//lay dsach tk
router.get('/nangquyen',tk.nangquyen_control);
router.get('/haquyen',tk.haquyen_control);
router.get('/taikhoan/delete',tk.xoatk_control);
router.get('/taikhoan/capnhat',tk.xoatk_control);
router.get('/taikhoan/sua',tk.getupdatetk_control);
router.post('/taikhoan/capnhat_tk',tk.updatetk_control);
module.exports = router;
