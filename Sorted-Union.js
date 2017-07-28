function uniteUnique(...arr) {
  var flatarray=[];
 
   arr.map( (x)=> Array.isArray(x) ? x.map( (y)=> flatarray.push(y) ): flatarray.push(x)  );
   
  return [...new Set(flatarray) ] ;

}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]])
