var express = require("express");
var C=require("./config/config.js");

var app=express();
//Configuracion
require(C.config+"express.js")(app);

app.set('port', C.port);

app.use("/", express.static(__dirname+"/public"));
app.use("/admin", express.static(__dirname+"/admin"));

app.listen(C.port, function(){
    console.log("Conectado: "+app.get("port"));
});








