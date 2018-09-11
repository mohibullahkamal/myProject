var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app" );   //We need to connect to MongoDB... lets start the "./mongod" server... then in the "mongoose.connect(...)"... we add the DB name... if we havent created the DB mentioned then mongoose creates it for us automatically...

var catSchema = new mongoose.Schema({   //ALWAYS USE this way when assigning a var, which will be used in MongoDB.... Couple of new commands come with mongoose that we have to learn... we are assigning "catSchema" a "mongoose.Schema" to turn to mongroose understandable code..
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema)   //Now taht we made "catSchema" Mongoose understandable...Now we are modelling it it Mongoose so we could manipulate "catSchema" data...

//adding a new cat to the DB


//retrieve all cats from the DB and do a simple console.log each one

