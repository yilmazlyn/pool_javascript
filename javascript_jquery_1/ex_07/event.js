$(document).ready(
  function(){
  $("p").on("mouseover", function(){
    $(this).css("background-color", "lightgray");
  });
  $('p').on("mouseleave", function(){
        $('p').css("background-color", "white");
    });
  $("p").on("click", function(){
    $(this).hide()
  });
});
