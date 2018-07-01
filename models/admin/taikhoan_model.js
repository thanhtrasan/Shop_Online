var db=require('../../fn/db');

// lay danh sach tai khoan
module.exports.taikhoan=(req,res)=>
{
    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    }
    var data=db.load("select * from taikhoan ")
        .then(data=>
        {
            var vm={
                isLogin:req.session.isLogin,
                tttk:data,
                user:req.session.user,
                layout:'admin',
                title:'Danh Sách Tài Khoản'
            }
            res.render('admin/taikhoan',vm);
        });

}

module.exports.add_account=(username ,password,email ,type,sdt,dc)=> {
    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    }

    var data=db.load("select * from taikhoan where username = N'"+username+"'")
        .then(data=>{
            if(data.length>0) {
                console.log("trung ten tk")
            }
            else{
                var query = "insert into taikhoan(username ,password,email ,type,sdt,dc " +
                    "values ( N'" + username + "', N'" + password + "',N'" + email + "', N'" + type +"',N'"+sdt+"' N'"+dc+"')";
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

// nang quyen tai khoan
module.exports.nangquyen=(req,res)=>
{
    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    }

if(req.query.id==(req.session.user.id))
{
    console.log("khong the tu chinh quyen cua minh");
    res.redirect('/admin/taikhoan');


}
db.load("select type from taikhoan where id ="+req.query.id)
    .then(
        (type)=>
        {


            if(type[0].type===2)

            {

                db.load("update taikhoan set type= 1 where id= "+req.query.id)


            }

           res.redirect('/admin/taikhoan');

        }
    )
}


// ha quyen tai khoan
module.exports.haquyen=(req,res)=>{
    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    }
    if(req.session.user.id!==0)
    {
        console.log("Khong phai main admin");
        res.redirect('/admin/taikhoan');


    }
    // ko phai admin chinh ko co quyen ha tk

    db.load("select type from taikhoan where id ="+req.query.id)
        .then(
            (type)=>{
                if(type[0].type===1)
                {

                    db.load("update taikhoan set type= 2 where id= "+req.query.id)


                }

                res.redirect('/admin/taikhoan');

            }
        )
}

//xóa tài khoản
module.exports.xoa=(req,res)=>{
    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    }
    if(req.session.user.id===req.query.id)
    {
        console.log("Khong the tu  huy tk");
        res.redirect('/admin/taikhoan');


    }

    db.load("select type from taikhoan where id ="+req.query.id)
        .then(
            (type)=>{
                if(type[0].type> req.session.user.type)
                {

                    db.load("delete from taikhoan where id= "+req.query.id)


                }

                res.redirect('/admin/taikhoan');

            }
        )
}

module.exports.getupdate=(req,res)=>
{
    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    }
    var vm={
        id:req.query.id,
        layout:'admin'
    }

    res.render('admin/capnhattk',vm);

}

module.exports.update=(req,res)=>
{
    if(req.session.isLogin==undefined||req.session.isLogin===false||(req.session.user.type!=1&&req.session.user.type!=0))
    {
        res.send("Bạn không có quyền truy cập");
        return;

    }
    db.load("update taikhoan set username= N'"+req.body.username+"' , dc= N'"+req.body.dc+"', email= N'"+req.body.email+"', " +
        "sdt = N'"+req.body.sdt+", password= N'"+req.body.password+", where id = "+req.query.id );
    res.render('/admin/taikhoan',{layout:'admin'});

}