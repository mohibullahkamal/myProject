var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");//just doing it in a different way and mind it we don't need that '#' before id name anymore :)
var displayP1 = document.querySelector("#p1Display");
var displayP2 = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;


p1Button.addEventListener("click", function(){
    p1Score++;
    displayP1.textContent = p1Score;
}); 

p2Button.addEventListener("click", function(){
    p2Score++;
    displayP2.textContent = p2Score;
}); 