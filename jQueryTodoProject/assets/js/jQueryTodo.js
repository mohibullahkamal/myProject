//Check Off Specific Todos By Clicking
$("li").click(function() {
    //Toggles from on and off state
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("span").click(function(event) {
    //setting 500ms for fading out; and then removing it out
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    //stopPropogation stops the general problem of "Bubble Effect" which is when <span> is clicked all parents upto head is fired respectively... we dont want that
    event.stopPropagation();
});

//Create new Todos
$("input[type='text']").keypress(function() {
    console.log("hrhrhrhr");
});