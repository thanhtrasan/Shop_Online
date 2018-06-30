var db=require('../../fn/db');
var model="id int AUTO_INCREMENT not null primary key," +
    "username varchar(100), " +
    "password varchar(16), " +
    "email varchar(100) unique, " +
    "type enum('1','2') ," +
    "SDT char(12)";

module.exports.create_table=
    db.load('create table if not exists taikhoan ( '+model+')');

// lay danh sach tai khoan
module.exports.taikhoan=(req,res)=>
{
    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    }
    var data=db.load("select * from taikhoan ")
        .then(data=>
        {
            var vm={
                isLogin:req.session.isLogin,
                tttk:data,
                user:req.session.user,
                layout:'admin',
                title:'Danh Sách Tài Khoản'
            }
            res.render('admin/taikhoan',vm);
        });

}

module.exports.add_account=(username ,password,email ,type,sdt,dc)=> {
    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    }

    var data=db.load("select * from taikhoan where username = N'"+username+"'")
        .then(data=>{
            if(data.length>0) {
                console.log("trung ten tk")
            }
            else{
                var query = "insert into taikhoan(username ,password,email ,type,sdt) " +
                    "values ( N'" + username + "', N'" + password + "',N'" + email + "', N'" + type +"',N'"+sdt+"')";
                db.load(query, function (err, result) {
                    if (err)
                        console.log(err)
                    else {
                        console.log("sucess");
                    }
                });
            }

        });


};
module.exports.setting_accout=(username,type)=>{
    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    }
    db.load("select * from taikhoan where username = N'"+username+"'")
        .then(
            account=>{
                if(account.length==0)
                {
                    console.log("can't find account")
                }
                else
                {
                    db.load("update taikhoan set type= N'"+type+"' where username = N'"+username+"'");
                }
            }
        )
}

//xóa tài khoản

