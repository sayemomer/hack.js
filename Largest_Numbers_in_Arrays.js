function largestOfFour(arr) {
  var maxarray=arr.map( (x)=>  Math.max(...x) );
  
  return maxarray  ;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
