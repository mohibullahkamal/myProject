// *****************************
// **** Number guess game ******
// *****************************
var secretNumber = 4;

//ask user for guess
var guess = prompt("Guess a number..");

//check if right
if (guess == secretNumber) {
    alert("***You got it right***");
}
//check if higher than secretNumber
else if (guess > secretNumber) {
    alert("Too high... Guess again!!");
}
//check if lower than secretNumber
else if (guess < secretNumber) {
    alert("Too low... Guess again!!");
}
//if input is wrong
else {
    alert("Error Input...");
}



// *****************************
// * Birthday + Perfect Square *
// *****************************
// Prompt always returns a String ... so use number()... just put prompt inside the brackets
var age = prompt("What is your age, please?");

// if age negative
if (age<0) {
    alert("Error!!");
} 
// if age 21
else if (age === 21) {
    alert("Happy 21st Birthday!!");
}
// if age Perfect square
else if (age % Math.sqrt(age) === 0) {
    alert("Age is PERFECT SQUARE!!");
}
// if age odd
else if (age === 1) { 
    alert("Your age is odd!!");
}
// if age odd
else if (age % 2) {
    alert("Your age is odd!!");
}
// else just print age...
else{
    alert("Your age is: "+age);
}


// *****************************
// **** Simple converse app ****
// *****************************
alert("Hello from the other side....");

var name = prompt("What is your name?");
var birth = prompt("What is your Year of Birth?");
var country = prompt("Which country do you live?");

alert(name + " was born in " + birth + 
    " and lives in " + country);


