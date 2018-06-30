var local=require('../models/local');
var express = require('express');

module.exports.index_control=local.index;

// them san pham vao gio
module.exports.them_control=(req,res)=>
{
if(req.session.cart==undefined||req.session.cart==null)
{
    req.session.cart=[];
}
    var item = {
        maSP: req.query.maquanao,
        ten:req.query.ten,
        link:req.query.link,
        gia:req.query.gia,
        tong:req.query.gia,
        soluong: 1,
    };

    local.them(req.session.cart, item);
    var vm={
        ttsp:req.session.cart
    };
    res.render('add-to-wishlist',vm);
}

// xoa san pham vao gio
module.exports.xoa_item_control=(req,res)=>
{

    local.xoaitem(req.session.cart,req.query.ma);
    var vm={
        ttsp:req.session.cart
    };
    res.render('add-to-wishlist',vm);
}
module.exports.xoa_item_cart_control=(req,res)=>
{
    local.xoaitem(req.session.cart,req.query.masp);
    var vm={
        isLogin: req.session.isLogin,
        user: req.session.user,
        ttsp:req.session.cart
    };
    console.log(vm);
    res.render('cart',vm);
}

module.exports.lay_cart_control=(req,res)=> {
    var tongtien=0;
    var cart=req.session.cart;
    for (i=cart.length-1;i>=0;i--)
    {
        tongtien += parseInt(cart[i].tong);
    }
    var vm = {
        isLogin: req.session.isLogin,
        user: req.session.user,
        ttsp: req.session.cart,
        total:tongtien
    };
    res.render('cart', vm);
}