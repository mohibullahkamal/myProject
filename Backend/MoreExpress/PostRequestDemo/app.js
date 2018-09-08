var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true})); // go read in body-parser docs about what urlencoder does...
app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "MOHIB"];


app.get("/", function(req, res) {
    console.log("User requested Home...");
    res.render("home");
});

app.get("/friends", function(req, res) {
    console.log("User requested Friend List...");
    res.render("friends", {friends: friends});
});

// this is a POST request ... use it when add data to App...
app.post("/addfriend", function(req, res) {
    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    
    console.log("User Posted an AddFriend request...");
    // res.send("YOU HAVE REACHED THE POST ROUTE..!!"); // we dont want to see this message.. instead we want to see what name we added.. so we use the below code instead
    res.redirect("/friends"); // "redirect"--> is new...instead of resend we use redirect....  this gives us back the updates page with new friend added....
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