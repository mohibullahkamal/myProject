var express = require("express");
var app = express();

app.set("view engine", "ejs");   // no longer ".ejs" extension required when function files in this project

// home page
app.get("/", function(req, res){
    // res.send("this will be the landing page soon...!!");   //used to test server connection... abondoned it for res.render("landing")...
    console.log("User Requested Home page...");
    res.render("landing");
});

// redirect to "/campground" page
app.get("/campgrounds", function(req, res){
    console.log("User Requested campGround page...");
    var campgrounds = [   // array containing starter Objects... which holds data... later we will relocate these data to a Database...
        {name: "Salmon Creek", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"},
        {name: "Granite Hill", image: "https://images.pexels.com/photos/1082316/pexels-photo-1082316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"},
        {name: "Mountain Snow", image: "https://images.pexels.com/photos/14287/pexels-photo-14287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}
    ];
    res.render("campgrounds", {campgrounds: campgrounds});   // [1st-campgrounds] --> renders the "views/campgrounds.ejs" file  //we use {} to indicate all the data that we want to pass... [2nd-campgrounds] --> is refering to the file name "campgrounds.ejs"... [3rd-campgrounds] --> is refering to the "var" named "campgrounds"
});

app.post("/campgrounds", function(req, res){
    console.log("User Posted campGround...");
       //get data from Form and add to campgrounds array
       //redirect back to campgrounds page
   
});





// Error page
app.get("*", function(req, res){
   console.log("User Entered wrong URL...!!");
   res.send("Please Enter Corret URL.");
});

// Server setup for c9
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started !!!");
});