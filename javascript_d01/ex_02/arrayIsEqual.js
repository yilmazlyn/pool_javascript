function arrayIsEqual(array1, array2) {
  if (array1 === array2) //if order of elements are not important
  {return true;}

  if (array1 == null ||  array2 == null) // to be sure that they are not null
   {return false;}

  if (array1.length != array2.length)

  {return false;}



  for (var i = 0; i < array1.length; ++i) {
    if (array1[i] !== array2[i])
    {return false;}
  }
  return true;
}
/*
var a = [1, 2, 3];
var b = [1, 1, 4];
console.log(arrayIsEqual(a,b));*/
