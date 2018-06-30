db =require('../../models/admin/taikhoan_model');
// them tai khoan
module.exports.them_control=db.add_account;
// lay danh sach tai khoan
module.exports.danhsachtk=db.taikhoan;
module.exports.capquyen_control= (req,res)=> {
    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    }
    db.load("select type from taikhoan where username = N'" + req.query.username + "'")
        .then(
            account => {
                if (account) {
                    console.log("can't find account")
                }
                else {
                    db.load("update taikhoan set type= N'" + type + "' where username = N'" + username + "'");
                }
            }
        )


}