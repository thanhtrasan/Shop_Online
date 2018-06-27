var db=require('../../fn/db');
var model="username varchar(100) not null primary key, " +
    "password varchar(16), " +
    "email varchar(100) unique, " +
    "type enum('1','2') ";


module.exports.create_table=
    db.load('create table if not exists taikhoan ( '+model+')');

module.exports.add_account=(username ,password,email ,type)=> {

    var data=db.load("select * from taikhoan where username = N'"+username+"'")
        .then(data=>{
            if(data.length>0) {
                console.log("trung ten tk")
            }
            else{
                var query = "insert into taikhoan(username ,password,email ,type) " +
                    "values ( N'" + username + "', N'" + password + "',N'" + email + "', N'" + type + "')";
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