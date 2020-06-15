//start range function
function range(start, end, step) {
  var array = [];
  var position = start;
//to be sure that if any false value returned as 0 or null, undefined so on...
//otherwise, assigning 1 to step

  step = step || 1;
  if (step > 0)
  {
      while (position <= end)
      {
          array.push(position); //push elements in to array for complete them
          //while position equal or inferior to step
          position += step;
      }
  }

  else
    {
      while (position >= end)
      {
          array.push(position);
          position += step;
      }
    }

  return array;
}


/*
console.log(range(1, 10, 2));
console.log(range(19, 22));
console.log(range(5, 2, -1));
*/
