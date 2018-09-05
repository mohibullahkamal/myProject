var express = require("express");
var app = express();

// When you go to "/"; then you get "Hi There!!!"  req and res are actually objects...req containes all info about the request that was made... res is about what will be responded with
app.get("/", function(req, res) {
   res.send("Hi there!");
});
// "/bye" => "Goodbye!!"

// "/dog" => "MEOW!!"

// Tell Express to Listen for requests (start server)
