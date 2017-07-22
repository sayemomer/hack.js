function diffArray(arr1, arr2) {
  
  let resultArray=[];
  for(let i=0;i<arr1.length;i++){
    
    
    for(let j=0;j<arr2.length;j++){

      if( arr1[i]==arr2[j] ){
        
          delete arr2[j];
          break;
        
      }
     
    }
     
  }
  
  return  arr2 ;
  
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
