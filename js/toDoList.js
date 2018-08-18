var todo = [];
//first prompt...
var input = prompt("What would you like to do?"
                    + "\n'n'  --> Add a Todo"
                    + "\n'ls' --> List all Todos"
                    + "\n'q' --> Quit App");

while(input !== "q") {
    //handle input
    if(input === "ls") {
        //start of list
        console.log("***********");
        //iterate through todo and list it
        todo.forEach(function(myInput) {
            console.log(todo.indexOf(myInput) +
                ": " + myInput);
        });
        //end of list
        console.log("***********");
    } else if (input === "n") {
        //ask for new entry
        var newEntry = prompt("Enter new Todo :)");
        //add to todos array
        todo.push(newEntry);
    }
    //ask again for new input
    input = prompt("What would you like to do?"
                    + "\n'n'  --> Add a Todo"
                    + "\n'ls' --> List all Todos"
                    + "\n'q' --> Quit App");
}
//quiting App
console.log("OK ... You are quitting the App!!");


