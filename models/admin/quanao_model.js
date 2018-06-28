var db=require('../../fn/db');

module.exports.add=(maquanao,ten,giaca,mausac,loai,gioitinh,malink,size,mainpic,malink1,malink2,malink3,mota)=> {

    var data=db.load("select * from quanao where maquanao = N'"+maquanao+"'")
        .then(data=>{
            if(data.length>0) {
                console.log("trung ma quan ao;")
            }
            else{
                var query = "insert into quanao(maquanao,ten,giaca,mausac,loai,gioitinh,malink," +
                    "size,mainpic,malink1,malink2,malink3,mota) " +
                    "values ( N'" + maquanao + "', N'" + ten + "'," + giaca + ", N'" + mausac + "', N'" + loai + "',N'" + gioitinh + "', N'"
                    + malink + "',N'" + size + "', N'" + mainpic + "', N'" + malink1 + "', N'" + malink2 + "', N'" + malink3 + "', N'" + mota + "')";
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