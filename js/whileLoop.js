//set count to string for being usable in "==="
console.log("Printing numbers between -10 to 19 ");
var stringCount = -10;
var count = Number(stringCount);
//print number between -10 to 19..
while (count <= 19) {
    console.log(count);
    count++;
}


//Printing numbers divisible by 3 and 5... between 0 to 50
console.log("Printing numbers between [0 - 50] that are divisible by 3 and 5");
var divi = 0

while (divi <= 50) {
    if (divi%3===0 && divi%5===0) {
        console.log(divi);
    }
    divi++;
}

