function sumAll(arr) {
  
  var value=0;
  for(let i=Math.min(...arr) ;i<=Math.max(...arr);i++){
    value += i ;
  }
  
  return value ;
}

sumAll([1, 4]);



//-----------------------Lodash Implimentation--------------------------------//


var _ = require('lodash');

function sumAll(arr) {
  return _.sum(  _.range( Math.min(...arr),Math.max(...arr)+1 )  );
}

sumAll([1, 4]);
