var express = require("express");
var app     = express();

app.get("/", function(req, res) {
    console.log("User requested HomePage");
    res.render("home.ejs"); // instead of using "res.send()" .....   .ejs(Embedded JS) It can run .html files ..
});

app.get("/like/:thing", function(req, res) {
   var name = req.params.thing;
   console.log("User likes --> " + name);
   res.render("love.ejs", {nameVar: name}); // {}-this is an object... so basically we are passing nameVar through an object... so it gets identified by love.ejs file...
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My life story", author: "James"},
        {title: "WebDev", author: "Mohib"}
    ];
    console.log("User is looking for Posts");
    res.render("posts.ejs", {posts: posts});
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