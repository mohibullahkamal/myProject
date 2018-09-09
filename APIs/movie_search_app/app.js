// My Movie Search App using Express

var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");


app.get("/results", function(req, res) {
    request("http://www.omdbapi.com/?apikey=3f2f6179&&&s=fast", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("render", {data: data});
            //res.send(results["Search"][0]["Title"]); // remember res.send can only be used once...
        }
    });
});






// App in listening
app.listen(process.env.PORT, process.env.ID, function(req, res){
    console.log("Movie App has started !!");
});