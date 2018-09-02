//Check Off Specific Todos By Clicking --> we are using .on() instead of .click(); thats because want to include this feature of ul to all the rest of newly added instances later on...
$("ul").on("click", "li", function() {
    //Toggles from on and off state
    $(this).toggleClass("completed");
});

//Click on X to delete Todo --> we are using .on() instead of .click(); thats because want to include this feature of ul to all the rest of newly added instances later on...
$("ul").on("click", "span", function(event) {
    //setting 500ms for fading out; and then removing it out
    $(this).parent().fadeOut(200, function() {
        $(this).remove();
    });
    //stopPropogation stops the general problem of "Bubble Effect" which is when <span> is clicked all parents upto head is fired respectively... we dont want that
    event.stopPropagation();
});

//Create new Todos
$("input[type='text']").keypress(function(event) {
    //Only when you click enter === 13, thats when the event is gonna be fired
    if(event.which === 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+
            todoText +"</li>")
    }
});

//make the input box appear when plus sign clicked otherwise disappear
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});