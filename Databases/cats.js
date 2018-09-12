//**********************************************************
// Steps to use Mongoose:
//    - connect to mongodb server..
//    - Then define a Schema - basically a plan as to what a "cat" data looks like [as in --> name, age, temperament, etc..]... although we could technically leave it blank; MongoDB can make it a required field as well eg:for user signIN [AUTH]
//    - Take Schema and compile it to a model(Convention is to use capital letter--> "Cat")... which returns an object that have a bunch of methods... so it knows about our plan [name, age, temperament,..] but it also adds in ".create", ".find", ...
//    - Making a new cat --> "= new Cat(...)"
//    - Saving--> ".save" it
//    - And having a callback to check for error..

// MAIN CONCEPTS:
// Intall Mongoose --> Connect to DB --> Schema --> Model --> Interact with DB[Create, find]... 

//**********************************************************



var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app" );   //We need to connect to MongoDB... lets start the "./mongod" server... then in the "mongoose.connect(...)"... we add the DB name... if we havent created the DB mentioned then mongoose creates it for us automatically...

var catSchema = new mongoose.Schema({   //ALWAYS USE this way when assigning a var, which will be used in MongoDB.... Couple of new commands come with mongoose that we have to learn... we are assigning "catSchema" a "mongoose.Schema" to turn to mongroose understandable code... You might asking why in noSQL we are defining a structure; well we are defining it because to give our data a good structure which will be easy to call later...
   name: String,
   age: Number,
   temperament: String
});

//the below "mongoose.model(bla bla) " --> is simply a function call where we add our meaningful names for readability...here "Cat" and "catSchema"...
//"var Cat" and "("Cat", ..)" are not the same... Mongoose smartly turns "Cat" to "cats" COLLECTION --> which will look "db.cats"  !!!!!
//The "Cat" with capital C must always be singular version of the property name... Mongoose will create a COLLECTION called "cats"... Mongoos is pretty smart as to how it pluralizes things...
var Cat = mongoose.model("Cat", catSchema); //We took the "catSchema" and compiled it into a model AND WE SAVE to a var "Cat"; and now we can use that "Cat" variable no make new/find/update/remove cats...... Now taht we made "catSchema" Mongoose understandable...Now we are modelling it it Mongoose so we could manipulate "catSchema" data...


// //**********************************************************
// //COMMENTING BELOW CODE because everytime I run this file... a new data is created in DB...
// //**********************************************************
// //adding a new cat to the DB
// var george = new Cat({   //the var "george" does not effect anything.. because it is in the JS side of things...
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });
// //That means we are just following a PATTERN already set by " mongoose.model("xyz", abc) " ; in the xyz and abc we could have placed anything really and we choose to add meaningful names for understandability..lol......What a revelation...
// george.save(function(err, cat){   // This is a call back function once cat is added to DB.... //we are trying to save George to DB... We will be using this format all the time so no worries you will get familiar with it... will use it with .find(), .remove()....etc
//     if (err){
//         console.log("SOMETHING WENT WRONG!!");   //If something went wrong
//     } else {
//         console.log("WE JUST SAVED CAT TO DB:");
//         console.log(cat);   //here "cat" refers to what came back from the DATABASE... that means we wait for DB response.. after added a data.. to be SURE of whetheror not the data has been saved to DB properly or not.... INTERESTING!!
//     }
// });
// //**********************************************************

//the above code could be shortened into one section instead of two... just like "Cat.find()" which is short and simple...
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
    }, function(err, cat){   //we are giving a meaningful name of "cat" here... instead of "cats" beacause we are creating a single cat...
        if(err){
            console.log(err);
        } else {
            console.log("WE JUST SAVED CAT TO DB:");
            console.log(cat);
        }
});

//retrieve all cats from the DB and do a simple console.log each one
Cat.find({}, function(err, cats){   //In "cats.find({}, function(..., ...)" here if you realize we are passing an empty variable in "find({}...."; thats because we just want to find all databases..//by now you are familiar that it is totally up to us to decide what meaningful nameswe want to set for "err" and "cats"...
    if(err){
        console.log("Oh No, ERROR!!");
        console.log(err);
    } else {
        console.log("ALL THE CATS.....");
        console.log(cats);
    }
});
