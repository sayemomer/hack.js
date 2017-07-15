function smallestCommons(arr) {
  var arr1=[];
  var arr2=[];
  
  for( let i=1;i<=Math.max(...arr);i++ ){
    
    arr1.push(i*arr[0]);
    arr2.push(i*arr[1]);
    
    
  }

 
 return Math.max( ...arr1.map( (x)=> arr2.filter( (y)=> x===y ? x :0) ) );
 
}


smallestCommons([1,5]);
