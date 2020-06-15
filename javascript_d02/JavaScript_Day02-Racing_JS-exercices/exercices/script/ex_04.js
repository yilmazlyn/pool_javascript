document.addEventListener('DOMContentLoaded',  function()
{
  var content = document; //memory of old version of html file
  var string = "";

    content.addEventListener('keydown', function(e)
    {
      var key_press = String.fromCharCode (event.keyCode); //so that we can get user input from keyboard
      var key_code = e.keyCode;
      document.getElementByClassName('exercice')[].innerHTML = string + key_press; // getting string to array
      document.getElementByClassName('exercice')[].innerHTML = string + key_code; // getting string's keycodes to array
      var display = key_press;

      string = string.concat(display); //to combine multiple strings and send them in a string
      string = string.substring(string.length - 42);




    })
};
