function confirmEnding(str, searchstr) {
  if(searchstr.length==1) 
  {
    var array=str.split("");
    return array[array.length-1]===searchstr ? true  : false ;// if the searchable string length is 1 compare with the last element of the givenstring 
  }
  else
  var nwarray=str.split(" ");

  return nwarray[nwarray.length-1].substr(-searchstr.length,searchstr.length) === searchstr ? true  : false  ;
   // if the searchable string length is greter then 1 then split with space, and substr from back to the srcstr length 
   //https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substr
}

confirmEnding("Open sesame", "me");


//-----------------------Lodash Implimentation--------------------------------//

var _ = require('lodash');

function confirmEnding(str, searchstr) {
  
  return _.endsWith(str,searchstr);
}

confirmEnding("Open sesame", "same");
