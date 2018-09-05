var express = require('express');
var app     = express();

// sends Homepage
app.get("/", function(req, res) {
    console.log("User requested for HOMEPAGE !!");
    res.send("Hi there, welcome to my assignment !!");
});

// user selects animals for sounds...
app.get("/speak/:animal", function(req, res) {
    var sound = { // adding all sounds to "sound" method...
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "Meow",
        goldfish: "Bloop Bloop"
    };
    var ani = req.params.animal.toLowerCase(); // If user enter any case...but the word is right
    var speak = sound[ani]; // Very Smart
    
    console.log("The User requested for --> '" + ani.toUpperCase() + "'");
    res.send("The " + ani + " says '" + speak + "'");
});

// repeat a message number of times...
app.get("/repeat/:message/:times", function(req, res) {
    var message = req.params.message;
    var times = Number(req.params.times); // converting into number...
    var result = "";
    
    for (var i = 0; i < times; i++) {
        result += message + " ";
    }
    res.send(result);
    console.log("User requested to repeat '" + message + "' --> " + times + " times !!");
});



// User enter wrong URL
app.get("*", function(req, res) {
    console.log("User request ERROR!!");
    res.send("Sorry, page not found...");
});

// START THE SERVER
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Router Started...");
});