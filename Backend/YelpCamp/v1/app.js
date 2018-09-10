var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send();
})

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started !!!");
});