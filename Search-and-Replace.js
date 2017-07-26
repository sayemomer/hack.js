function myReplace(str, before, after) {
 if (before.charCodeAt(before[0]) >= 65 && before.charCodeAt(before[0]) <=90)
  {
return str.replace(before,after[0].toUpperCase().concat( after.slice(1) ) );
  }
   
  
  return  str.replace(before,after );
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


//-----------------------Lodash Implimentation--------------------------------//


var _ = require('lodash');


function myReplace(str, before, after) {
 if (before.charCodeAt(before[0]) >= 65 && before.charCodeAt(before[0]) <=90)
  {
return str.replace(before,_.capitalize(after));
  }
   
  
  return  str.replace(before,after );
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
