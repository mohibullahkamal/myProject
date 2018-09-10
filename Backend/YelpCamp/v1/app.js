var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));   //"app.use()"--> helps us to tell ***Express to use "boby-parser"... we also need to ".urlencoded" and pass in an "object-> {}" ... just memorize it... we will be needed it a lot...
app.set("view engine", "ejs");   //no longer ".ejs" extension required when function files in this project

//now globally accessesible -> campground array - moved here until later on we migrate to Database...
var campgrounds = [   // array containing starter Objects... which holds data... later we will relocate these data to a Database...
        {name: "Salmon Creek", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"},
        {name: "Granite Hill", image: "https://images.pexels.com/photos/1082316/pexels-photo-1082316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"},
        {name: "Mountain Snow", image: "https://images.pexels.com/photos/14287/pexels-photo-14287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"},
        {name: "Salmon Creek", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"},
        {name: "Granite Hill", image: "https://images.pexels.com/photos/1082316/pexels-photo-1082316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"},
        {name: "Mountain Snow", image: "https://images.pexels.com/photos/14287/pexels-photo-14287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"},
        {name: "Salmon Creek", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"},
        {name: "Granite Hill", image: "https://images.pexels.com/photos/1082316/pexels-photo-1082316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"},
        {name: "Mountain Snow", image: "https://images.pexels.com/photos/14287/pexels-photo-14287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}
    ];
    
// home page
app.get("/", function(req, res){
    // res.send("this will be the landing page soon...!!");   //used to test server connection... abondoned it for res.render("landing")...
    console.log("User Requested Home page...");
    res.render("landing");
});

// re-direct to "/campground" page
app.get("/campgrounds", function(req, res){
    console.log("User Requested campGround page...");
    
    // var campgrounds = [   // array containing starter Objects... which holds data... later we will relocate these data to a Database...
    //     {name: "Salmon Creek", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"},
    //     {name: "Granite Hill", image: "https://images.pexels.com/photos/1082316/pexels-photo-1082316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"},
    //     {name: "Mountain Snow", image: "https://images.pexels.com/photos/14287/pexels-photo-14287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}
    // ];
    
    res.render("campgrounds", {campgrounds: campgrounds});   // [1st-campgrounds] --> renders the "views/campgrounds.ejs" file  //we use {} to indicate all the data that we want to pass... [2nd-campgrounds] --> is refering to the file name "campgrounds.ejs"... [3rd-campgrounds] --> is refering to the "var" named "campgrounds"
});

app.post("/campgrounds", function(req, res){   // "app.post()" command is used to post data, as opposed to "app.get()"
    console.log("User Posted on campGround...");
    //res.send("YOU HIT THE POST ROUTE!!");   // lets go test in Postman, whether our App is sending out a post command...
    var name = req.body.name;   //get data from Form and add to campgrounds array
    var image = req.body.image;   //get data from Form and add to campgrounds array
    var newCampground = {name: name, image: image};   //making object to be used by "campground[] array..."
    
    campgrounds.push(newCampground);   //we push a new "campground" in the "campgrounds[]" array... but we need to push in an Object.. so lets make that Object with "var"... lets call it "newCampgound"... 
    
    res.redirect("/campgrounds");   //after pushing "newCampground"; we need to REDIRECT back to campgrounds page to show user the updated record... yes we have two "/campgrounds" but by default it will use the "app.get("/campgrounds", fun..) request...
});

app.get("/campgrounds/new", function(req, res){   //RESTful convention of "/campgrounds/new" is followed... This will basically send the data to the "app.post("/campgrounds", function()...)"
   console.log("User Requested Newly Added Data");
   res.render("new");
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