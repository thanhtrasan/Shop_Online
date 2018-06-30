var db=require('../../fn/db');
var model="id int(20) AUTO_INCREMENT not null primary key," +
    "Ten varchar(25)," +
    "idtk int," +
    "TP varchar(20), " +
    "Quan varchar(30), " +
    "DC varchar(150), " +
    "SDT char(12)," +
    "email varchar(70)," +
    "FOREIGN KEY (idtk) REFERENCES taikhoan(id)";


module.exports.create_table=
    db.load('create table if not exists donhang ( '+model+')');
module.exports.dat_hang=(req,res)=>
{
  res.end();
};