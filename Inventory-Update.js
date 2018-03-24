function alpabeticSort(curInv){
  var temp ;
  for( var i=0 ;i<curInv.length-1;i++){
    for( var j=0;j<curInv.length-1;j++){
      
      if( curInv[j][1].split("")[0].charCodeAt() > curInv[j+1][1].split("")[0].charCodeAt() ){
        
         temp=curInv[j];
        curInv[j]=curInv[j+1];
        curInv[j+1]=temp;
        
      }
    }
  }
  
  return curInv;
  
}

function updateInventoryHelper(newInv,curInv){
  
  if(newInv[1]===curInv[1]){
            
            if( newInv[0] > curInv[0] ){
              var flag=1;
            curInv[0] = newInv[0]+curInv[0];
            }
            
          }
  return flag;
  
}

function updateInventory(curInv, newInv) {
   var check;
     for( var i=0 ;i<newInv.length;i++){
       
        for( var j=0 ;j<curInv.length;j++){
          check= updateInventoryHelper(newInv[i],curInv[j]);
          if(check===1 ){
            break;
          }
        }
        
        if( check === undefined){
          curInv.push(newInv[i]);
        }
        
     }
     
    return alpabeticSort(curInv);
}

// Example inventory lists
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])

