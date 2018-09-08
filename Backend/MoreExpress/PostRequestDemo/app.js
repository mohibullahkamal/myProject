var express = require("express");
var app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res) {
    console.log("User requested Home...");
    res.render("home");
});

app.get("/friends", function(req, res) {
    var friends = ["Tony", "Miranda", "Justin", "MOHIB"];
    console.log("User requested Friend List...");
    res.render("friends", {friends: friends});
});







// home 
app.get("/", function(req, res) {
    console.log("User requested Home...");
    res.render("home");
});

// listen port
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Started !!");
});