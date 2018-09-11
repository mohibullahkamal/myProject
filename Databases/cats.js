var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app" );   //We need to connect to MongoDB... lets start the "./mongod" server... then in the "mongoose.connect(...)"... we add the DB name... if we havent created the DB mentioned then mongoose creates it for us automatically...

var catSchema = new mongoose.Schema({   //ALWAYS USE this way when assigning a var, which will be used in MongoDB.... Couple of new commands come with mongoose that we have to learn... we are assigning "catSchema" a "mongoose.Schema" to turn to mongroose understandable code... You might asking why in noSQL we are defining a structure; well we are defining it because to give our data a good structure which will be easy to call later...
   name: String,
   age: Number,
   temperament: String
});

//"var Cat" and "("Cat", ..)" are not the same... Mongoose smartly turns "Cat" to "cats" COLLECTION --> which will look "db.cats"  !!!!!
//The "Cat" with capital C must always be singular version of the property name... Mongoose will create a COLLECTION called "cats"... Mongoos is pretty smart as to how it pluralizes things...
var Cat = mongoose.model("Cat", catSchema)  ; //We took the "catSchema" and compiled it into a model AND WE SAVE to a var "Cat"; and now we can use that "Cat" variable no make new/find/update/remove cats...... Now taht we made "catSchema" Mongoose understandable...Now we are modelling it it Mongoose so we could manipulate "catSchema" data...

//adding a new cat to the DB
var george = new Cat({
    name: "George",
    age: 11,
    temperament: "Grouchy"
});

george.save(function(err, cat){   // This is a call back function.. //we are trying to save George to DB... We will be using this format all the time so no worries you will get familiar with it... will use it with .find(), .remove()....etc
    if (err){
        console.log("SOMETHING WENT WRONG!!");
    } else {
        console.log("WE JUST SAVED CAT TO DB:");
        console.log(cat);   //
    }
});


//retrieve all cats from the DB and do a simple console.log each one

