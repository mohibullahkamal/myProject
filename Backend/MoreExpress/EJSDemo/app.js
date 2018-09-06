var express = require("express");
var app     = express();

app.get("/", function(req, res) {
    res.render("home.ejs"); // instead of using "res.send()" .....   .ejs(Embedded JS) It can run .html files ..
});

app.get("/iloveu/:thing", function(req, res) {
   var name = req.params.thing.toUpperCase();
   res.render("love.ejs");
});





// Port variables that c9 has set for their environment...
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started...");
});