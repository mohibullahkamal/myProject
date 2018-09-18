
// ******************************************************
// ****** All Variables *********************************
// ******************************************************
var numSquares = 6;
var colors = [];   //generateRandomColors( numSquares );   //array of six colors 
var pickedColor;   // = pickColor();
var squares = document.querySelectorAll( ".square" );
var colorDisplay = document.getElementById( "colorDisplay" );
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector( "h1" ); 
var resetButton = document.getElementById( "reset" );
var modeButtons = document.querySelectorAll( ".mode");   //we dont need easybutton and hard button -  because DRY; we just have mode...
// var easyBtn = document.getElementById( "easyBtn" );
// var hardBtn = document.getElementById( "hardBtn" );
// colorDisplay.textContent = pickedColor;   //we can get rid of this because we are doing it inside the init function...

// ******************************************************


init();  //Put in everything to run when the page loads..
function init() {
    setUpModeButtons();
    setupSquares();
    reset();
}





// ******************************************************
// ******************************************************
function setUpModeButtons(){
    //Mode buttons - event Listeeners
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");   //Removing hoghlighting from easy and hard buttons
        modeButtons[1].classList.remove("selected");   //Removing hoghlighting from easy and hard buttons
        this.classList.add("selected");
        
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;   //Ternary operator --> the below several line of code written in 1 line :)
        // if(this.textContent ===  "Easy"){
        //     numSquares = 3;
        // } else {
        //     numSquares = 6;
            
        // }
        reset();
        //figure out how many squares to show
        //pick new colors
        //pick a new pickedColor
        //Update page to reflect changes
        });
    }
}
// ******************************************************
// ******************************************************





// ******************************************************
// *** lets loop through  colors ************************
// ******************************************************
function setupSquares(){
    for( var i = 0; i < squares.length; i++ ) {
        //squares[i].style.backgroundColor = colors[i];   // no need anymore because we use the reset... //add innitial colors to square
        squares[i].addEventListener( "click", function() {   //add click listeners to squares
            var clickedColor = this.style.backgroundColor;   //grab color of clicked square
            //compare color to pickedColor
            if( clickedColor === pickedColor ) {
                messageDisplay.textContent = "CORRECT!!";
                resetButton.textContent = "Play Again?";
                changeColors( clickedColor );   //Changing all squares to correct guessed color
                h1.style.backgroundColor = clickedColor;   //change h1 to correct guessed color
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "TRY AGAIN";
            }
        });
    }
}
// ******************************************************
// ******************************************************






// // easyBtn - event 
// easyBtn.addEventListener( "click", function() {
//     hardBtn.classList.remove( "selected" );
//     easyBtn.classList.add( "selected" );
//     numSquares = 3;
//     colors = generateRandomColors( numSquares );
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for( var i = 0; i < squares.length; i++ ) {
//         if( colors[i] ) { 
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// // hardBtn - event
// hardBtn.addEventListener( "click", function() {
//     hardBtn.classList.add( "selected" );
//     easyBtn.classList.remove( "selected" );
//     numSquares = 6;
//     colors = generateRandomColors( numSquares );
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for( var i = 0; i < squares.length; i++ ) {
//             squares[i].style.background = colors[i];
//             squares[i].style.display = "block";
//     }
// });



// ******************************************************
// **** All Event listeners *****************************
// ******************************************************
// Reset Button - event  
resetButton.addEventListener( "click", function() {
    reset();   //for DRY code... :) the below lines of codes is omitted...

    // colors = generateRandomColors( numSquares );   //generate all new colors
    // pickedColor = pickColor();   //pick a new random color from array
    // colorDisplay.textContent = pickedColor;   //Change colorDisplay to match picked Color
    // this.textContent = "New Colors";
    
    // messageDisplay.textContent = "";   //After winning game "Correct" is show; this command removes it when new game selected 
    // //change colors of squares
    // for( var i = 0; i < squares.length; i++ ) {
    //     squares[i].style.backgroundColor = colors[i];   //add innitial colors to square
    // }
    // h1.style.backgroundColor = "steelblue";   //change h1 color to original
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
    colors = generateRandomColors( numSquares );   //generate all new colors
    pickedColor = pickColor();   //pick a new random color from array
    colorDisplay.textContent = pickedColor;   //Change colorDisplay to match picked Color
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";   //After winning game "Correct" is show; this command removes it when new game selected 
    //change colors of squares
    for( var i = 0; i < squares.length; i++ ) {
        if(colors[i]){
            squares[i].style.display =  "block";
            squares[i].style.backgroundColor = colors[i];   //add innitial colors to square
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";   //change h1 color to original
}

// ******************************************************
