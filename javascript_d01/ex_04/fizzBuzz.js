function fizzBuzz()
{
	let output = "";

	for (i = 1; i <= 20; i++)
  {

		if (i % 3 === 0 && i % 5 === 0)
    {
			output += "FizzBuzz, ";
		}

     else if (i % 3 === 0)
    {
			output += "Fizz, ";
		}

    else if (i % 5 === 0)
    {

			if (i === 20)
      {
      				output += "Buzz";
			}

      else
      {
				output += "Buzz, ";
			}
		}

    else
    {
			output += i + ', ';
		}

	}
	console.log(output);
}
//fizzBuzz();
