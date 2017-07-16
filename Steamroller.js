function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flatarray=[];
  if( typeof(arr[0]) === "number" )
  {
   arr.map( (x)=> Array.isArray(x) ? x.map( (y)=> flatarray.push( Number(y) ) ) : flatarray.push(x) );
  return flatarray ;
  }
  
 arr.map( (x)=> flatarray.push( x.toString() ) );
 return flatarray ;
  
}

steamrollArray([1, [2], [3, [[4]]]])
