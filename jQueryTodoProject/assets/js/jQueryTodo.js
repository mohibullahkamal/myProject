//Check Off Specific Todos By Clicking
$("li").click(function() {
    //if statement checks for "click" state
    if( $(this).css("color") === "grey") {
        console.log("IT is Currently grey..");
    }

    //turn text to grey and line through
    $(this).css("color", "grey");
    $(this).css("text-decoration", 
        "line-through");
});