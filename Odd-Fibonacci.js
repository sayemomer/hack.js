function sumFibs(range ){
  var x =[0,1];
  
  for( let i=2; ;i++){
    
    if(x[x.length-1]>range){
     x.pop();
     break;
   }
     x.push( x[i-1]+x[i-2] )
  }
  return x.filter( (x)=> x%2!==0 ).reduce( (x,y)=> x+y,0);
}

sumFibs(10);

//  ---------------------------Lodash implimentation---------------------------------//

var _ = require('lodash');
function sumFibs(range ){
  var x =[0,1];
  
  for( let i=2; ;i++){
    
    if(x[x.length-1]>range){
     x.pop();
     break;
   }
     x.push( x[i-1]+x[i-2] )
  }
  let filarray= x.filter( (x)=> x%2!==0 );
  
  return _.sum(filarray);
}

sumFibs(10);

