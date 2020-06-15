function drawTriangle(size)
{
    var a = 0;
    var dollars = "$";

    while (a < size)
        {
            console.log(dollars);
            dollars = dollars + "$";
            a++;
        }

        if(typeof(size) == 'undefined')
           {
               console.log("empty");
           }
           else if(size < 0)
           {
               console.log("too low");
           }
       }





    /*    try { NEEDS TO BE UNDERSTOOD FOR ERROR HANDLING
    if(size === "") throw "empty";
    if(isNaN(size)) throw "not a number";
    size = Number(size);
    if(size < 0) throw "too low";
    if(size > 100) throw "too high";
  }
  catch(size) {
    size = "invalid"
    console.error(error) = "Input is " + error;
  }
}*/



//drawTriangle(6);
