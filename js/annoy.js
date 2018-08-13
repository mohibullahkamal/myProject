// ****************************
// ******** Version 2 *********
// ** Checks whether "yes" is there anywhere in user inpur... SMART :) ****
// ****************************
//taking user input
var answer = prompt("Are you there yet??");
var count = 1;

//checking whether user entered "yes" ANYWHERE is user input :).. compare with version one...
while (answer.indexOf("yes") === -1) {
    //keep prompting user
    var answer = prompt("Are you there yet??");
    // counting how many user tries
    count++;
}
//print after user enters "yes"
alert ("Congrates you made it...!! You succeeded in " 
        + count +  " tries!!");



// ****************************
// ******** Version 1 *********
// ****************************
// //taking user input
// var answer = prompt("Are you there yet??");
// var count = 0;

// //checking whether user entered "yes"
// while (answer !== "yes") {
//     //keep prompting user
//     var answer = prompt("Are you there yet??");
//     count++;
// }
// //print after user enters "yes"
// alert ("Congrates you made it...!! You succeeded in " 
//         + count +  " tries!!");