var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
//Import the mongoose module
var mongoose = require('mongoose');

var mongoDB = 'mongodb://Admin:123456@ds211440.mlab.com:11440/food_online';
mongoose.connect(mongoDB).then(
    function () {
        console.log("Connected");
    },
    function (err) {
        console.log("UnConnect ");
    }
);
// khoi tao du lieu

var ac = require('./models/Account');
var food = require('./models/Food');
var category = require('./models/FoodCategory')
var user = require('./models/UserCategory')

var ac1 = new ac(
    { username: 'Trang', displayname: 'Minh Trang', pass: '123', type: 'Ad' },
);

ac1.save(function (err) {
    if (err) {
        console.log("init account fail!");
    }
    else {
        console.log("init account success!");
    }
    // saved!
});
var food01 = new food(
    {
        ID: '00001', name: 'Che', idCate: 'TN01', price: 10000
    });

food01.save(function (err) {
    if (err) {
        console.log("init food fail!");
    }
    else {
        console.log("init food success!");
    }
    // saved!
});

var cate = new category(
    { ID: 'TN01', name: 'Do Uong' });
cate.save(function (err) {
    if (err) {
        console.log("init food category fail!");
    }
    else {
        console.log("init food category success!");
    }
    // saved!
});
var user1 = new user(
    { ID: 'Ad', name: 'Admin' }
);
user1.save(function (err) {
    if (err) {
        console.log("init user fail!");
    }
    else {
        console.log("inituser  success!");
    }
    // saved!
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
