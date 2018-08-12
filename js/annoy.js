//taking user input
var answer = prompt("Are you there yet??");
var count = 0;

//checking wether user entered "yes"
while (answer !== "yes") {
    //keep prompting user
    var answer = prompt("Are you there yet??");
    count++;
}
//print after user enters "yes"
alert ("Congrates you made it...!! You succeeded in " 
        + count +  " tries!!");