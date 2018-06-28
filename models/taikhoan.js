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