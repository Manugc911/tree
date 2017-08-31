'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port= process.env.PORT || 3456;


mongoose.connect("mongodb://localhost:27017/users", (err,res)=> {

    if(err){
        
        console.log("ERRORR");
        throw err;
    }else{
        
        console.log("Conexion a mongoDB");
        app.listen(port,function(){
            console.log(`API REST TREE funcionando en :${port}`)
            
            
        } );  
    }
 
});

