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


module.exports=
    db.load('create table if not exists quanao ( '+model+')');


// get data
module.exports.getdata=function(req, res)
{

    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
       res.send("Bạn không có quyền truy cập");
       return;

    }
    var query="select * from quanao";

    db.load(query).then(
        (rows)=>{
            var vm={
                isLogin: req.session.isLogin,
                user: req.session.user,
                info:rows,layout:'admin'
            };

            res.render('admin/quanao',vm);
        })

};

//post search
module.exports.search=function(req, res, next) {
    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    }

    var query="%"+req.body.search+"%";
    console.log(query);
    var query="select * from quanao where ten like N'"+query+"' or maquanao like N'"+query+"'";

    db.load(query).then(

        rows=>{
            var vm={
                isLogin: req.session.isLogin,
                user: req.session.user,
                info:rows,layout:'admin'
            };
            res.render('admin/quanao', vm);
            return;

        });

};
// get add product
module.exports.get_add_product=function(req, res)
{
    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    }
    var vm = {
        isLogin: req.session.isLogin,
        user: req.session.user,
       layout:'admin',
        title:'Thêm sản phẩm'
    };
    res.render('admin/quanao_create',vm);
};
// post add product
module.exports.add_product=function(req, res) {

    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    }
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
                var vm={
                    isLogin: req.session.isLogin,
                    user: req.session.user,

                    layout:'admin'
                };
                res.render('admin/quanao_create',vm);

            }

        });

}
// get update
module.exports.get_update=function(req, res, next) {
    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    }
    var vm={
        isLogin: req.session.isLogin,
        user: req.session.user,
        title: 'Cập nhật sản phẩm',
        layout:'admin',
        id:req.query.id
    };
    res.render('admin/quanao_update',vm);


};
//post update

module.exports.update= (req,res)=>
{
    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    };
    var query = "update quanao set ten= N'"+req.body.ten+"', giaca= "+req.body.giaca+" , maquanao= N'"+req.body.maquanao+"' , mausac = N'"
            +req.body.mausac + "' , loai= N'"+req.body.loai+"' , gioitinh= N'"
            +req.body.gioitinh+"' , malink = N'"+req.body.mainpic+"' , malink1 = N'"+req.body.malink1
            +"' , malink2 = N'"+req.body.malink2+"' , malink3 = N'"+req.body.malink3+"' , mota = N'"+req.body.mota +"' , nsx =N'" +req.body.nsx
            + "' where id = "+req.body.id;

    db.load(query);

            res.redirect('/admin/quanao');


}




//post delete
module.exports.delete=(req,res)=>
{
    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    }
    db.load("delete  from quanao where id ="+req.query.id)
    var vm={
        isLogin:req.session.isLogin,
        user:req.session.user,
        layout:'admin'
    }
    res.redirect('./quanao');



};

