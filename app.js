var express = require('express');
var exphbs  = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
var db=require('./fn/db');
var dbquanao=require('./fn/quan_ao_controller');


//var db = require('./fn/db');
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
          
    db.load(sql).then( rows=>{
       if(rows.length>0)
       {     
          
       dbquanao.shop_control(req,res);  
       }
       else
       {         
         res.render('login');
       }
      });
          
 });


 app.post('/register', function (req, res) {

    console.log("aa");
    var data = req.body;
    var sql = "insert into qlquanao.dangky(username,email,password) values('"+data.username+"','"+data.email+"', '"+data.password+"')";
    console.log(sql);
    db.load(sql).then(rows => {
        dbquanao.shop_control(req,res);   
    });
  });
  
module.exports = app;
