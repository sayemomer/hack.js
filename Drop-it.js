function dropElements(arr, func) {
  // Drop them elements.
   var newarr = [ ...new Set(arr) ];
   var filteredArray= arr.filter( func );
   
   if( newarr.length !== arr.length){
     
     return arr.slice( arr.indexOf( filteredArray[0] ) );
     
   }
  
 
 return filteredArray;
 
}

dropElements([1, 2, 3, 9,2], function(n) {return n > 2;})
