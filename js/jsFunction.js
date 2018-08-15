// ****************************************
// ****** isEven **************************
// ****************************************
//fast short version...
function isEven(num) {
    return num % 2 === 0;
}
//Slow version...
// function isEven(num) {
//     //return true if even
//     if(num % 2 === 0) {
//         return true;
//     }
//     //return false otherwise
//     else {
//         return false;
//     }
// }


// ****************************************
// **** factorial *************************
//eg: factorial(4) --> 4*3*2*1      *******
// ****************************************
function factorial(num) {
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for (var i = 2; i <= num; i++) {
        result = result *= i;
    }
    //return the result variable
    return result;
}


// ****************************************
// ****** kebabToSnake() ******************
// ****************************************
function kebabToSnake(str) {
    //replace all '-' to "_"s
    var newStr = str.replace(/-/g, "_");
    //return str
    return newStr;
}
