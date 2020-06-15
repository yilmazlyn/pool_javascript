

document.addEventListener('DOMContentLoaded', function()
{
  var counter = 0;
  
  var click = document.getElementsByTagName('div');

  click[2].onclick = function ()
    {
      counter++;
      click[2].textContent = "Click on it " + counter;
    };

});
