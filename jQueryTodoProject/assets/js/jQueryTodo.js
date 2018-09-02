//Check Off Specific Todos By Clicking
$("li").click(function() {
    //if statement checks for "click" state
    $(this).toggleClass("completed");
});