var express = require("express");
var app = express();

app.set("view engine", "ejs");


// home page
app.get("/", function(req, res){
    console.log("User Requested HOME page.");
    // res.send("this will be the landing page soon...!!"); //used to test server connection... abondoned it for res.render("landing")...
    res.render("landing");
});

// redirect to "/campground" page
app.get("/campground", function(req, res){
    console.log("User Requested /CAMPGROUND page.");

});







// Error page
app.get("*", function(req, res){
   console.log("User Entered wrong URL..!!");
   res.send("Please Enter Corret URL.");
});

// Server setup for c9
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started !!!");
});