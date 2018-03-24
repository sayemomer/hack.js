
var _ = require('lodash');

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
     
 return _.orderBy(curInv, [1], ['asc']);
}

updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);


