
//This is working bt only with body why I can not figure it out
/*$(document).ready(function()
{
    $('#bullet-button').click(
    function(){
                var text = $('#bullets').val();
                $('<li>').html(text).appendTo('body');
                $('#bullets').val('');
});
    });

*/
//second option does not work for the reason that non-understood....
/*
$(document).ready(function(){
$('#bullet-button').click(function(){
  var text = $('#bullets').val();
  $('.ul_current').html(text).append('<li>' + $('#bullets').val());
    }));

});
*/
$(document).ready(
	function(){

		$("#bullet-button").click(function(){
			var text = $("#bullets").val();
			$(".list").prepend("<li>" + text +"</li>");
			$("#bullets").val("");
		});

	});
