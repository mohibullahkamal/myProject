var todo = [];
//first prompt...
var input = prompt("What would you like to do?"
                    + "\n'n' --> Add a Todo"
                    + "\n'ls'--> List all Todo"
                    + "\n'd' --> Delete a specific Todo"
                    + "\n'q' --> Quit App");

while(input !== "q") {
    //handle input
    if(input === "ls") {
        //start of list
        console.log("***********");
        //iterate through todo and list it; "i" represents index of todo
        todo.forEach(function(myInput, i) {
            console.log(i + ": " + myInput);
            // console.log(todo.indexOf(myInput) +
            //     ": " + myInput);
        });
        //end of list
        console.log("***********");
    } else if (input === "n") {
        //ask for new entry
        var newEntry = prompt("Enter new Todo :)");
        //add to todos array
        todo.push(newEntry);
        console.log("Added todo :)");
    } else if (input === "d") {
        //ask for index to be deleted
        var index = prompt("Enter index to delete :)");
        //delete that todo index; the "1" represents how many element after "index" do you want to do delete
        todo.splice(index, 1);
        console.log("Deleted todo :)");
    }
    //ask again for new input
    input = prompt("What would you like to do?"
                    + "\n'n'  --> Add a Todo"
                    + "\n'ls' --> List all Todos"
                    + "\n'd' --> Delete a specific Todo"
                    + "\n'q' --> Quit App");
}
//quiting App
console.log("OK ... You are quitting the App!!");


