db =require('../../models/admin/taikhoan_model');
// them tai khoan
module.exports.them_control=db.add_account;
// lay danh sach tai khoan
module.exports.danhsachtk=db.taikhoan;
module.exports.nangquyen_control= db.nangquyen;
module.exports.haquyen_control= db.haquyen;
module.exports.xoatk_control=db.xoa;
module.exports.getupdatetk_control=db.getupdate;
module.exports.updatetk_control=db.update;