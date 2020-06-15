$(document).ready(function()
{
  $(".item").click(function(){
  var string = $("#listItem").val();
  $("<div></div>").append("<p>" + string + "</p>");
});
});
