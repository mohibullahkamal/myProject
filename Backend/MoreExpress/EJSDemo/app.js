var express = require("express");
var app     = express();

//express does not directly use resources from your directory... you have to explicitly ask for it and assign it
app.use(express.static("public")); // "public" is the name for directory... that we want to connect to... we don't need to mention in the app.css file... we can just simple call it...

// with this command we now no longer have to write home.ejs; love.ejs; posts.ejs  ..... to shorten our code...
app.set("view engine", "ejs");


app.get("/", function(req, res) {
    console.log("User requested HomePage");
    res.render("home"); // instead of using "res.send()" .....   .ejs(Embedded JS) It can run .html files ..
});

app.get("/like/:thing", function(req, res) {
   var name = req.params.thing;
   console.log("User likes --> " + name);
   res.render("love", {nameVar: name}); // {}-this is an object... so basically we are passing nameVar through an object... so it gets identified by love.ejs file...
});

// posts ...
app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My life story", author: "James"},
        {title: "WebDev", author: "Mohib"}
    ];
    console.log("User is looking for Posts");
    res.render("posts", {posts: posts}); // the first "posts" must have been "posts.ejs" but we can shorten it ...lol... to do this we need to set it above... "app.set("view engine") "....
});




// Error input..
app.get("*", function(req, res){
   console.log("SOMEONE MADE A  WRONG REQUEST!!");
   res.send("Please enter correct URL..!!");
});

// Port variables that c9 has set for their environment...
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started...");
});