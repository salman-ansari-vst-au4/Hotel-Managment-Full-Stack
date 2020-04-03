var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/waiter', require('./Controller/Waiter'));
app.use('/bill', require('./Controller/Bill'));
app.use('/menu', require('./Controller/Menu'));
app.use('/table', require('./Controller/Table'));
app.use('/billmenu', require('./Controller/BillMenu'));

module.exports = app;
