// var firstLi = document.querySelector("li");
var lis = document.querySelectorAll("li");

//Loops through all lis...
for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function() { 
        // this.style.color = "red"; // we are not using this, but instead we are using the below... for separation of concern
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function() {
        // this.style.color = "black"; // we are not using this, but instead we are using the below... for separation of concern
        this.classList.remove("selected"); // using ".remove" to remove "selected" class
    });
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}