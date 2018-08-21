var todo = ['Default entry'];
//first prompt...
userSelection();

while(input !== "q") {
    //handle input
    if(input === "ls") {
        listTodos();
    } else if (input === "n") {
        addTodo();
    } else if (input === "d") {
        deleteTodo();
    }
    //ask again for new input
    userSelection();
}
//quiting App
console.log("OK ... You are quitting the App!!");





//************************************* 
//********** All Functions ************
//*************************************

function listTodos() {
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
}

function addTodo() {
    //ask for new entry
    var newEntry = prompt("Enter new Todo :)");
    //add to todos array
    todo.push(newEntry);
    console.log("Added todo :)");
}

function deleteTodo() {
    //ask for index to be deleted
    var index = prompt("Enter index to delete :)");
    //delete that todo index; the "1" represents how many element after "index" do you want to do delete
    todo.splice(index, 1);
    console.log("Deleted todo :)");
}

function userSelection() {
    //Prompt for user selection
    
}
//*************************************
//*************************************
//*************************************
