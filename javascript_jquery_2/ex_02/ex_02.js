
$(document).ready(function(){
  $("#button").click(function()
  {
    var string = $("#input").val()
    var something = $("input[name=test]:checked").val();

    //console.log(string);
   //console.log(something);


    $(".list").prepend("<li>" + string + "</li>");
    if(something === "note")
        {
            $(".list").prepend("<li>" + string + "</li>");
            $('li:last').addClass('.note');
        }
    else if(something === "email")
        {
            $(".list").prepend("<li>" + string + "</li>");
            $('li:last').addClass('.email');
        }
    else if(something === "todo")
        {   $(".list").prepend("<li>" + string + "</li>");
            $('li:last').addClass('.todo');
        }
    $('#input').val('');


  });
});

/*
if (something == "note"){
  $(".list").prepend("<li>" + string + "</li>");
  $("#input").val("").addClass(".note");

}*/
