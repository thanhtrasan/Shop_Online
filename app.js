var express = require('express');
var exphbs  = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');

//var db = require('./fn/db');
var app = express();
var path = require('path');
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
module.exports = app;
