function getIndexToIns(arr, num) {
 
  var counter=0;
   var maxnum=Math.max( ...arr.sort( (a,b) => a-b ).filter( (x)=> x<num ) );
    for( let i=0;i<arr.length;i++){
      
      if( arr[i]== maxnum){
        counter++;
      }
    }
    
    if( counter>1){
      
       return arr.sort( (a,b) => a-b ).indexOf( Math.max(...arr.filter( (x)=> x<num )) )+counter;
      
    }
  
  return arr.sort( (a,b) => a-b ).indexOf( Math.max(...arr.filter( (x)=> x<num )) )+1;
}

getIndexToIns([5, 3, 20, 3], 5)
