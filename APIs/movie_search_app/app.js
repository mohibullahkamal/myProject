// My Movie Search App using Express

var express = require("express");
var app = express();
var request = require("request");

app.get("/results", function(req, res) {
    res.send("Hello, it works!");
    request("http://www.omdbapi.com/?apikey=3f2f6179&&&s=fast", function(error, response, body) {
        if
    });
});






// App in listening
app.listen(process.env.PORT, process.env.ID, function(req, res){
    console.log("Movie App has started !!");
});