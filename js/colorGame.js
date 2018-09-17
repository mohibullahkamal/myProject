
// ******************************************************
// ****** All Variables *********************************
// ******************************************************
var numSquares = 6;
var colors = generateRandomColors( numSquares );   //array of six colors 
var squares = document.querySelectorAll( ".square" );
var pickedColor = pickColor();
var colorDisplay = document.getElementById( "colorDisplay" );
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector( "h1" ); 
var resetButton = document.getElementById( "reset" );
var modeButtons = document.querySelectorAll( ".mode");

var easyBtn = document.getElementById( "easyBtn" );
var hardBtn = document.getElementById( "hardBtn" );
colorDisplay.textContent = pickedColor;

// ******************************************************


// ******************************************************
// *** lets loop through  colors ************************
// ******************************************************
for( var i = 0; i < squares.length; i++ ) {
    //add innitial colors to square
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener( "click", function() {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        
        //compare color to pickedColor
        if( clickedColor === pickedColor ) {
            messageDisplay.textContent = "CORRECT!!";
            resetButton.textContent = "Play Again?";
            //Changing all squares to correct guessed color
            changeColors( clickedColor );
            //change h1 to correct guessed color
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "TRY AGAIN";
        }
    });
}
// ******************************************************


// ******************************************************
// **** All Event listeners *****************************
// ******************************************************
// Reset Button - event  
resetButton.addEventListener( "click", function() {
    //generate all new colors
    colors = generateRandomColors( numSquares );
    //pick a new random color from array
    pickedColor = pickColor();
    //Change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for( var i = 0; i < squares.length; i++ ) {
        //add innitial colors to square
        squares[i].style.backgroundColor = colors[i];
    }
    //change h1 color to original
    h1.style.backgroundColor = "steelblue";
});

// easyBtn - event 
easyBtn.addEventListener( "click", function() {
    hardBtn.classList.remove( "selected" );
    easyBtn.classList.add( "selected" );
    numSquares = 3;
    colors = generateRandomColors( numSquares );
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for( var i = 0; i < squares.length; i++ ) {
        if( colors[i] ) { 
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

// hardBtn - event
hardBtn.addEventListener( "click", function() {
    hardBtn.classList.add( "selected" );
    easyBtn.classList.remove( "selected" );
    numSquares = 6;
    colors = generateRandomColors( numSquares );
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for( var i = 0; i < squares.length; i++ ) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "black";
    }
});
// ******************************************************


// ******************************************************
// ****** All Functions *********************************
// ******************************************************
//all color changes to correct guessed color
function changeColors( color ) {
    //loop through all squares
    for( var i = 0; i < squares.length; i++ ) {
        //change each squares to match given color
        squares[i].style.backgroundColor = color;
    }
}

//Randomly picks a color
function pickColor() {
    //Math.floor return whole no. and Math.random returns random no. ....along with "* 6" returns any no. between 0,1,2,3,4,5 
    var random = Math.floor( Math.random() * colors.length );
    return colors[random];
}

//Generates random colors for squares
function generateRandomColors( num ) {
    //make an array
    var arr = [];
    //repeat num times
    for( var i = 0; i < num; i++ ) {
        //get random color and push into arr
        arr.push( randomColor() );
    }
    //return that array
    return arr;
}

//randomColor generator
function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor( Math.random() * 256 );
    //pick a "green" from 0 - 255
    var g = Math.floor( Math.random() * 256 );
    //pick a "blue" from 0 - 255
    var b = Math.floor( Math.random() * 256 );
    //return rgb(r,g,b)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

// ******************************************************
