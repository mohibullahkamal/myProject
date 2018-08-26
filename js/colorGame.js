//array of six colors 
var colors = generateRandomColors(6);

// ******************************************************
// ****** All Variables *********************************
// ******************************************************
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var msg = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
// ******************************************************


// ******************************************************
// lets loop through colors***************************
// ******************************************************
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
            //change h1 to correct guessed color
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            msg.textContent = "TRY AGAIN";
        }
    });
}
// ******************************************************


// ******************************************************
// Event listener for Reset Button ***************************
// ******************************************************
reset.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new random color from array
    pickedColor = pickColor();
    //Change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    //change h1 color
    h1.style.backgroundColor = "#232323";
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        //add innitial colors to square
        squares[i].style.backgroundColor = colors[i];
    }
})
// ******************************************************


// ******************************************************
// ****** All Functions ******
// ******************************************************
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
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//Generates random colors for squares
function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

//randomColor generator
function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    //return rgb(r,g,b)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
// ******************************************************
