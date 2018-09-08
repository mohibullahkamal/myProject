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

// this a POST request ... used when add data to App...
app.post("/addfriend", function(req, res) {
   res.send("YOU HAVE REACHED THE POST ROUTE..!!") 
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