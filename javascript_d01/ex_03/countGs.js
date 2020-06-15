function countGs(string)
{
   counter = 0;
	 uppercase = "G";

	for(i = 0; i < uppercase.length; i++){
		for(j = 0; j < string.length; j++){
			if(uppercase[i] == string[j]){
				counter++;
			}
		}
	}
return counter;
}

//console.log(countGs("abcgGggGeaGfdsGG"));
