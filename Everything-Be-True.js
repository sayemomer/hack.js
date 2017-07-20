function truthCheck(collection, pre) {
  // Is everyone being true?
  var array=[];
  for( let i=0;i<collection.length ;i++){
    
      for( let x in collection[i]){
          if( x=== pre ){
            array.push(x);
          }
        
      }
  }

return array.length === collection.length ? true : false  ;

}

truthCheck([{"single": ""}, {"single": "double"}], "single")
