var express = require('express');
var exphbs  = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
var db=require('./fn/db');
var dbquanao=require('./fn/quan_ao_controller');


var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var app = express();
var session = require('express-session')
var MySQLStore = require('express-mysql-session')(session);
var options = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'qlquanao'
  };
  var sessionStore = new MySQLStore(options);
  
  app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  }));
  


var path = require('path');
var body = require('body-parser');
app.use(body.json());
app.use(body.urlencoded({extended:false}));
//
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var adminRouter = require('./routes/admin');

var querystring = require('querystring');
app.use(express.static(path.resolve(__dirname, 'public')));
app.engine('handlebars', exphbs({defaultLayout: 'main',
    helpers:{
        section: express_handlebars_sections()
    }
}));
app.set('view engine', 'handlebars');


app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/admin', adminRouter);




 app.post('/register', function (req, res) {

    var data = req.body;
    var sql = "insert into qlquanao.dangky(username,email,password) values('"+data.username+"','"+data.email+"', '"+data.password+"')";

    db.load(sql).then(rows => {
        dbquanao.shop_control(req,res);   
    });
  });
  var a=require('./models/admin/donhang_model');

//a.add('1','2',3,'1','23sdf','nam','asdsa','b','ádasd','ádas','ádasd','ádas','wer');

module.exports = app;
