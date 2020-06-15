document.addEventListener('DOMContentLoaded', function() // to wait of loading page
{

var click = document.getElementsByTagName('div');

click[2].onclick = function(){

	var name = '';

	while(name == null || name == ''){
		name = prompt('Quel est votre nom ?');
	}

	if(name != null && name != '')
  {

		var checkbox = prompt('Etes vous sur que ' + name + ' est votre nom ?');

		if(checkbox == null)
    {
			return false;
		}

    else if (checkbox == 'non')
    {
      return false;
    }

  if (checkbox == 'yes')
    {
			click[2].innerHTML = 'Bonjour ' + name + ' !';
		}
	}
}
});
