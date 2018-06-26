var express = require('express');
var exphbs  = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
var db=require('./fn/db');
var dbquanao=require('./fn/quan_ao_controller');



var app = express();
var path = require('path');
var body = require('body-parser');
app.use(body.json());
app.use(body.urlencoded({extended:false}));
//
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');

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

  app.post('/login', function (req, res) {
    var data= req.body;
    var sql="select dangky.username "+ 
            "from qlquanao.dangky "+
            "where dangky.email = '"+data.email+"' " +
            "and dangky.password = '"+data.password+"'";
           console.log(sql);
     db.load(sql).then( rows=>{
       console.log('vso');
        if(rows.length>0)
        {     
          console.log('tao');
          res.redirect('/shop');
        }
        else
        {         
          res.render('user/login');
        }
       });
           
  });


 app.post('/register', function (req, res) {

    var data = req.body;
    var sql = "insert into qlquanao.dangky(username,email,password) values('"+data.username+"','"+data.email+"', '"+data.password+"')";
    console.log(sql);
    db.load(sql).then(rows => {
        dbquanao.shop_control(req,res);   
    });
  });
  
module.exports = app;
