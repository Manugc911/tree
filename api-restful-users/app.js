/*Express code*/
'use strict'

var express = require('express');
var bodyParser=require('body-parser');
var api=require('./routes/user');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
   res.header('Access-Control-Allow-Origin','*');
   res.header('Access-Control-Allow-Headers','X-API-KEY,X-Requested-With,Content-Type,Accept,Access-Control-Request-Method');
   res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
   res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');    
  // res.hearder('Authorization','9G9R34G3JFVWI9FUTWDRDQD8KZ1AUC2L');    
    next();
});

app.use("/api",api);


module.exports = app;