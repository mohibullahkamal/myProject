alert("Hello from the other side....");

var name = prompt("What is your name?");
var birth = prompt("What is your Year of Birth?");
var country = prompt("Which country do you live?");

alert(name + " was born in " + birth + 
    " and lives in " + country);


// *****************************
// * Birthday + Perfect Square *
// *****************************

var age = prompt("What is your age, please?");

if (age<0) {
    alert("Error!!");
} 
else if (age == 21) {
    alert("Happy 21st Birthday!!");
}
else if (age % Math.sqrt(age) === 0) {
    alert("Age is PERFECT SQUARE!!");
}
else if (age == 1) { 
    alert("Your age is odd!!");
}
else if (age % 2) {
    alert("Your age is odd!!");
}
else{
    alert("Your age is: "+age);
}