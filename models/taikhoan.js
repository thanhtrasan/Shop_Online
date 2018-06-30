var db=require('../fn/db.js');

module.exports.register=(req,res)=>
{

    var sql = "insert into taikhoan(username,email,password,type,sdt,dc) values(N'"+req.body.username+"',N'"+req.body.email+"', N'"
        +req.body.password+"',2, N'"+req.body.sdt+"', N'"+req.body.dc+"')";
    console.log(sql);
    db.load(sql).then((rows) =>
    {
        res.redirect('/shop');
    }
    );
};

module.exports.get_register=(req,res)=>
{
    res.render('user/register');
};

module.exports.login=function (req, res) {
    var data= req.body;
    var sql="select username,id,type "+
        "from taikhoan "+
        "where email = '"+data.email+"' " +
        "and password = '"+data.password+"'";

    db.load(sql).then( rows=>{
        if(rows.length>0)
        {

            req.session.user=rows[0];
            req.session.isLogin=true;



            res.redirect('/shop');
        }
        else
        {
            res.render('user/login');
        }
    });

};