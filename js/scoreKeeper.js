// *********** Buttons ***********
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");//just doing it in a different way and mind it we don't need that '#' before id name anymore :)
var resetButton = document.getElementById("reset");

// *** variables used in file ***
var displayP1 = document.querySelector("#p1Display");
var displayP2 = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span"); // we did not use id... we purposely did it in a different way...
var gameOver = false;
var winningScore = 4;

// *** Player1 button functionality ***
p1Button.addEventListener("click", function(){
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            //getting winner class from .css file
            displayP1.classList.add("winner");
            gameOver = true;
        }
        displayP1.textContent = p1Score;
    }     
}); 

// *** Player2 button functionality ***
p2Button.addEventListener("click", function(){
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            //getting winner class from .css file
            displayP2.classList.add("winner");
            gameOver = true;
        }
        displayP2.textContent = p2Score;
    }
});

// *** Event listener for User Input ***
numInput.addEventListener("change", function() { // a "change" event will activate anytime any value has been changed... Ideal for this situation cause we could manually add values into the text box and it would not have notified if "click" was used...
    winningScoreDisplay.textContent = numInput.value; //we are using ".value" to  change the number we get from user input to value... so now we can display that value...
});

// *** Reset button functionality ***
resetButton.addEventListener("click", resetScore);

//separate function for resetScore division of concern..
function resetScore() {
    p1Score = 0;
    p2Score = 0;
    displayP1.textContent = 0;
    displayP2.textContent = 0;
    displayP1.classList.remove("winner");
    displayP2.classList.remove("winner");
    gameOver = false;
}