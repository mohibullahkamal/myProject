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
            // for(var x = 0; x < colors.length; x++) {
            //     colors[x].style.backgroundColor = "green";
            // }
            msg.textContent = "CORRECT!!";

        } else {
            this.style.backgroundColor = "#232323";
            msg.textContent = "TRY AGAIN";
        }
});
}


//all color changes to correct guessed color
function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < colors.length; i++) {

    }
    //change each squares to match given color

}