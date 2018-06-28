var db=require('../../fn/db');

module.exports.add=(maquanao,ten,giaca,mausac,loai,gioitinh,malink,size,mainpic,malink1,malink2,malink3,mota)=> {

   db.load("select * from quanao where maquanao = N'"+maquanao+"'")
        .then(data=>{
            if(data.length>0) {
                console.log("trung ma quan ao;")
            }
            else{
                var query = "insert into quanao(maquanao,ten,giaca,mausac,loai,gioitinh,malink," +
                    "size,mainpic,malink1,malink2,malink3,mota) " +
                    "values ( N'" + maquanao + "', N'" + ten + "'," + giaca + ", N'" + mausac + "', N'" + loai + "',N'" + gioitinh + "', N'"
                    + malink + "',N'" + size + "', N'" + mainpic + "', N'" + malink1 + "', N'" + malink2 + "', N'" + malink3 + "', N'" + mota + "')";
                db.load(query,function (err, result) {
                    if (err)
                        console.log(err)
                    else {
                        console.log("sucess");
                    }
                });
            }

        });


};

module.exports.update=(req,res)=>
{

    db.load("select * from quanao where maquanao = N'"+req.body.maquanao+"'")
        .then(data=>{
            if(data.length<1) {
                res.render('admin/quanao_update', {title:'Cập nhật thất bại',layout: 'admin'});
            }
            else{
                var query = "update quanao set ten= N'"+req.body.ten+"' , giaca= "+parseFloat(req.body.giaca)+" , mausac = N'"+req.body.mausac+"' , loai= N'"+req.body.loai+"' , gioitinh= N'"
                    +req.body.gioitinh+"' , malink = N'"+req.body.mainpic+"' , malink1 = N'"+req.body.malink1
                +"' , malink2 = N'"+req.body.malink2+"' , malink3 = N'"+req.body.malink3+"' , mota = N'"+req.body.mota+
                    "' where maquanao = N'"+req.body.maquanao+"'";

                db.load(query);

                    res.render('admin/quanao_update', {title:'Cập nhật thành công',layout: 'admin'});

            }

        });

}
module.exports.delete=(req,res)=>
{

    db.load("delete  from quanao where maquanao = N'"+req.body.maquanao+"'")
        res.render('admin/quanao_delete',{title:"Xóa Thành Công",layout:'admin'});


}