var db=require('../../fn/db');

var model=
    "maquanao varchar(30) unique, " +
    "ten varchar(50), " +
    "giaca bigint, " +
    "mausac nvarchar(45) ," +
    "loai varchar(15)," +
    "gioitinh varchar(15)," +
    "malink varchar(70)," +
    "size char(10)," +
    "mainpic varchar(70)," +
    "malink1 varchar(70)," +
    "malink2 varchar(70)," +
    "malink3 nvarchar(70)," +
    "mota varchar(200)," +
    "id int AUTO_INCREMENT not null primary key";


module.exports.create_table=
    db.load('create table if not exists quanao ( '+model+')');


// get data
module.exports.getdata=function(req, res)
{

    var query="select * from quanao";

    db.load(query).then(
        (rows)=>{


            res.render('admin/quanao',{info:rows,layout:'admin'});
        })

};

//post search
module.exports.search=function(req, res, next) {

    var query="%"+req.body.search+"%";
    console.log(query);
    var query="select * from quanao where ten like N'"+query+"' or maquanao like N'"+query+"'";

    db.load(query).then(

        rows=>{

            res.render('admin/quanao', {info: rows, layout: 'admin'});


        });

};
// get add product
module.exports.get_add_product=function(req, res) {

    res.render('admin/quanao_create',{title: 'Add Product',layout:'admin'});
};
// post add product
module.exports.add_product=function(req, res) {


    db.load("select * from quanao where maquanao = N'"+req.body.maquanao+"'")
        .then(data=>{
            if(data.length>0) {
                console.log("trung ma quan ao;");
                res.render('admin/quanao_create',{title: 'Add Product',layout:'admin'});
            }
            else{
                var query = "insert into quanao(maquanao,ten,giaca,mausac,loai,gioitinh,malink," +
                    "size,mainpic,malink1,malink2,malink3,mota) " +
                    "values ( N'" + req.body.maquanao + "', N'" + req.body.ten + "'," + req.body.giaca + ", N'" + req.body.mausac + "', N'" + req.body.loai + "',N'" + req.body.gioitinh + "', N'"
                    + req.body.malink + "',N'" + req.body.size + "', N'" + req.body.mainpic + "', N'" + req.body.malink1 + "', N'" + req.body.malink2 + "', N'" +req.body.malink3 + "', N'" + req.body.mota + "')";
                db.load(query);
                res.render('admin/quanao_create',{title: 'Add Product',layout:'admin'});

            }

        });

}
// get update
module.exports.get_update=function(req, res, next) {

    res.render('admin/quanao_update',{title:'Cập nhật sản phẩm',layout:'admin'});


};
//post update

module.exports.update= (req,res)=>
{

    db.load("select * from quanao where maquanao = N'"+req.body.maquanao+"'")
        .then(data=>{
            if(data.length<0) {
                res.render('admin/quanao_update', {title:'Cập nhật thất bại',layout: 'admin'});
            }
            else{

                var query = "update quanao set ten= N'"+req.body.ten+"' , giaca= "+parseFloat(req.body.giaca)+" , mausac = N'"+req.body.mausac+"' , loai= N'"+req.body.loai+"' , gioitinh= N'"
                    +req.body.gioitinh+"' , malink = N'"+req.body.mainpic+"' , malink1 = N'"+req.body.malink1
                    +"' , malink2 = N'"+req.body.malink2+"' , malink3 = N'"+req.body.malink3+"' , mota = N'"+req.body.mota+
                    "' where maquanao = N'"+req.body.maquanao+"'";

                db.load(query,(result)=>{
                    if(result)
                        res.render('admin/quanao_update', {title:'Cập nhật thành công',layout: 'admin'});
                    else
                    {
                        res.render('admin/quanao_update', {title:'Cập nhật thất bại',layout: 'admin'});
                    }
                    });



            }

        });

};

//get delete
module.exports.get_delete=function(req, res, next) {

    res.render('admin/quanao_delete',{layout:'admin'});


};

//post delete
module.exports.delete=(req,res)=>
{

    db.load("delete  from quanao where maquanao = N'"+req.body.maquanao+"'")
    res.render('admin/quanao_delete',{title:"Xóa Thành Công",layout:'admin'});


};

