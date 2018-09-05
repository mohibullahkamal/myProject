var express = require("express");
var app = express();

// When you go to "/"; then you get "Hi There!!!"  req and res are actually objects...req containes all info about the request that was made... res is about what will be responded with
app.get("/", function(req, res) {
   console.log("SOMEONE MADE A REQUEST TO HOMEPAGE..!!")
   res.send("Hi there, Welcome to my website :) !!!");
});

// "/bye" => "Goodbye!!"
app.get("/bye", function(req, res){
   console.log("SOMEONE MADE A REQUEST TO /bye..!!");
   res.send("GoodBye...Have a nice day :)!!");
})

// "/dog" => "MEOW!!"
app.get("/dog", function(req, res){
   console.log("SOMEONE MADE A REQUEST TO /dog..!!");
   res.send("MEOW..!!");
})

// Tell Express to Listen for requests (start server).... We are just asking Cloud9 to use their specific PORT and IP... Else if we used our manually setup environment then just "app.listen(3000)" would have worked
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has started!!");
});





