var express = require("express");
var app = express();

app.set("view engine", "ejs");






app.get("/", function(req, res) {
    console.log("User requested Home...")
    res.render("home");
})

app.get("/", function(req, res) {
    console.log("User requested Home...")
    res.render("home");
})

app.get("/", function(req, res) {
    console.log("User requested Home...")
    res.render("home");
})






// home 
app.get("/", function(req, res) {
    console.log("User requested Home...")
    res.render("home");
})

// listen port
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Started !!");
});