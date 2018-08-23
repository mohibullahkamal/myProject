// var firstLi = document.querySelector("li");
var lis = document.querySelectorAll("li");

//Loops through all lis...
for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function() { 
        this.style.color = "red";
        this.style.fontWeight = "bold"; //bolds font on hover
    });
    lis[i].addEventListener("mouseout", function() {
        this.style.color = "black";
        this.style.fontWeight = "normal"; //changes it back to normal on mouseOut
    });
}