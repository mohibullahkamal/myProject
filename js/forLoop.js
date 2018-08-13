//Printing numbers
console.log("Printing number between -10 to 19");
for(var i = -10; i < 20; i++) {
    console.log(i);
}

//Print even numbers
console.log("Printing all even numbers between 10 and 40");
for(var i = 10; i <= 40; i++) {
    if(i % 2 === 0){
        console.log(i);
    }
}

//Printing odd numbers
console.log("Printing all odd numbers between 300 to 333")
for(var i = 300; i <= 333; i++) {
    if(i % 2 !== 0){
        console.log(i);
    }
}

//Printing numbers divisible by 5 and 3
console.log("Printing numbers divisible by 5 and 3");
for(var i = 5; i <= 50; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
            console.log(i);
    }
}