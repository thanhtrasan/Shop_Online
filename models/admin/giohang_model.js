var db=require('../../fn/db');
var model= "idtk int," +
    "idsp int," +
    "soluong int, " +

    "FOREIGN KEY (idsp) REFERENCES quanao(id)," +
    "FOREIGN KEY (idtk) REFERENCES taikhoan(id)";


module.exports.create_table=
    db.load('create table if not exists giohang ( '+model+')');
// them vao co so du lieu
module.exports.them=(idtk,idsp,soluong)=>
{
    db.load("insert into giohang(idtk,idsp,soluong) values ("+idtk+","+idsp+","+soluong,")");
}


