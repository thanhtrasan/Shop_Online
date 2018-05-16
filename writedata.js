//Import the mongoose module
var mongoose = require('mongoose');

var mongoDB = 'mongodb://Admin:123456@ds211440.mlab.com:11440/food_online';
mongoose.connect(mongoDB).then(
    function(){
        console.log("Connected");
    },
    function (err) {
        console.log("UnConnect ");
    }
);
// khoi tao du lieu
var ac=require('./models/Account');
var food=require('./models/Food');
var category=require('./models/FoodCategory')
var user= require('./models/UserCategory')

var ac1= new ac(
    { username: 'Trang', displayname: 'Minh Trang', pass:'123', type: 'Ad'},
);

ac1.save(function (err) {
    if (err) {
        console.log("init account fail!");
    }
    else
    {
        console.log("init account success!");
    }
    // saved!
});
var food01=new food(
    {
        ID: '00001', name:'Che',idCate:'TN01',price: 10000
    });

food01.save(function (err) {
    if (err) {
        console.log("init food fail!");
    }
    else
    {
        console.log("init food success!");
    }
    // saved!
});

var cate=new category(
    {ID: 'TN01', name:'Do Uong'});
cate.save(function (err) {
    if (err) {
        console.log("init food category fail!");
    }
    else
    {
        console.log("init food category success!");
    }
    // saved!
});
var user1=new user(
    {ID: 'Ad', name:'Admin'}
);
user1.save(function (err) {
    if (err) {
        console.log("init user fail!");
    }
    else
    {
        console.log("init user  success!");
    }
    // saved!
});