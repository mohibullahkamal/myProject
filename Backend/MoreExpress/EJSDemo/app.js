var express = require("express");
var app     = express();

app.get("/", function(req, res) {
    console.log("User requested HomePage");
    res.render("home.ejs"); // instead of using "res.send()" .....   .ejs(Embedded JS) It can run .html files ..
});

app.get("/iloveu/:thing", function(req, res) {
   var name = req.params.thing;
   console.log("User loves --> " + name);
   res.render("love.ejs", {nameVar: name}); // {}-this is an object... so basically we are passing nameVar through an object... so it gets identified by love.ejs file...
});






// Error input..
app.get("*", function(req, res){
   console.log("SOMEONE MADE A REQUEST TO *..!!");
   res.send("Please enter correct URL..!!");
})

// Port variables that c9 has set for their environment...
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started...");
});