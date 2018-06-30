var db=require('../../fn/db');
var model="id int(20) AUTO_INCREMENT not null primary key," +
    "idtk int," +
    "TP varchar(20), " +
    "Quan varchar(30), " +
    "DC varchar(150), " +
    "SDT char(12)," +
    "email varchar(70)," +
    "ngay datetime DEFAULT CURRENT_TIMESTAMP" +
    "FOREIGN KEY (idtk) REFERENCES taikhoan(id)";


module.exports.s=
    db.load('create table if not exists donhang( '+model+')');
module.exports.dat_hang=(req,res)=>
{
  if(req.session.isLogin==undefined||req.session.isLogin==false||(req.session.type!=1&&req.session.type!=0))
  {
    var vm={
      isLogin
    }
    res.redirec('admin',)
  }
  res.end();
};