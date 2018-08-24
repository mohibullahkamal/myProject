//array of six colors
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

// ****** All Variables ******
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var display = document.getElementById("colorDisplay");
display.textContent = pickedColor;
// ***************************

// lets loop through colors
for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}
