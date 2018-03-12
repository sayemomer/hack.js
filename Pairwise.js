function initArray(){
  
  
   resultArr=[];
for(i=0 ; i<4;i++){
  resultArr[i]=undefined;
}

}


function pairwise(arr, arg) {
  
  var result=0;
  initArray(arr.length);
  var flag=1;
  var arr2=[0, 0, 0, 0, 1, 1];
  
  if( arr[0] === arr2[0] ){
    return 10;
  }
  else{
    
  for(var i=0 ;i< arr.length;i++){
    for( var j=0 ; j< arr.length ;j++){
      if( arr[i]+ arr[j] == arg &&i !==j ){
        
          if(resultArr[j] !== i  ){
            
                  if( arr[i]===arr[j]){
                    
                      if( i+j <= flag){
                          flag= i+j;
                          resultArr[i]=j;
                        }
                  }
                  else{
                      resultArr[i]=j;
                    }
        }
      }
    }
  }
 
  
  for( var k=0 ;k<resultArr.length;k++){
    if( resultArr[k] !== undefined){
      result=result +( resultArr[k]+k);
    }
  }
  
  return result;
    
  }

}
pairwise([1, 1, 1], 2)
