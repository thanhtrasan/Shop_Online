db=require('../fn/db');
module.exports.index=function (req, res) {
    var vm={

        isLogin: req.session.isLogin,
        user: req.session.user
    };

    res.render('index',vm);
};

module.exports.contact=function (req, res) {
    var vm={

        isLogin: req.session.isLogin,
        user: req.session.user
    };
    res.render('contact',vm);
};

// them gio hang local
module.exports.them=(cart, item) => {

    console.log(cart);
    for (i = cart.length - 1; i >= 0; i--) {
        if (cart[i].maSP === item.maSP) {

            cart[i].soluong += item.soluong;
            cart[i].ten=item.ten;
            cart[i].link=item.link;
            cart[i].gia=item.gia;
            cart[i].tong=item.gia*cart[i].soluong;

            return;
        }
    }

    cart.push(item);

}

// xoa 1 item trong gio hang
module.exports.xoaitem=(cart, item) => {

    for (i = cart.length - 1; i >= 0; i--) {
        if (cart[i].maSP === item)
        {
           cart.splice(i,1);
        }
    }


}