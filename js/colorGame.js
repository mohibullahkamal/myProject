//array of six colors
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
// ***************************
// ****** All Variables ******
// ***************************
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var display = document.getElementById("colorDisplay");
display.textContent = pickedColor;

var msg = document.getElementById("message");
// ***************************

// lets loop through colors
for(var i = 0; i < squares.length; i++) {
    //add innitial colors to square
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        
        //compare color to pickedColor
        if(clickedColor === pickedColor) {
            msg.textContent = "CORRECT!!";
            //Changing all squares to correct guessed color
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            msg.textContent = "TRY AGAIN";
        }
    });
}

// ***************************
// ****** All Functions ******
// ***************************
//all color changes to correct guessed color
function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < squares.length; i++) {
        //change each squares to match given color
        squares[i].style.backgroundColor = color;
    }
}

//Randomly picks a color
function pickColor(){
    //Math.floor return whole no. and Math.random returns random no. ....along with "* 6" returns any no. between 0,1,2,3,4,5 
    var randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
}
// ***************************
