function diffArray(arr1, arr2) {
  
  let resultArray=[];
  let newArray=arr1.concat(arr2).sort();
  
  var temp ;
  
  
  for(let j=0;j<=newArray.length  ;j++){
  
     temp =newArray.shift();
    
    
  for( let i=0 ;i<=newArray.length ;i++){
    if( newArray[i]===temp){
    
      newArray.shift();
     
      break;
    }
    else {
      resultArray.push( temp );
      break;
    }
    
  }
   j=0 ; 
  }
 
  
 return resultArray ;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
