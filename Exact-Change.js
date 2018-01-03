function checkCashRegister(change,cashInDrawer) {
  
   var totalCoin=[];
   var trackCoin=[];
   
   totalCoin[0]=0;
  
  for( let i=1 ;i<=change;i++){
    totalCoin[i]=Infinity;
  }
  
  for( let i=0 ;i<=change;i++){
    trackCoin[i]=-1;
  }
  
  for( let cashInDrawerIndex =0 ; cashInDrawerIndex<cashInDrawer.length;cashInDrawerIndex++){
    
    for( let totalCoinIndex =1 ; totalCoinIndex<totalCoin.length; totalCoinIndex++){
      
     // console.log([ totalCoinIndex,cashInDrawer[cashInDrawerIndex] ]);
      
       if( totalCoinIndex >= cashInDrawer[cashInDrawerIndex] ){
         
         let minCoin ;
        
          minCoin=Math.min( totalCoin[totalCoinIndex] , 1+totalCoin[totalCoinIndex-cashInDrawer[cashInDrawerIndex]] )
          
         //  console.log(minCoin);
        
         totalCoin[totalCoinIndex] = minCoin;
         
         trackCoin[totalCoinIndex] =cashInDrawerIndex;
      
      }
      
    }
    
  }
  
  console.log(totalCoin);
  console.log(trackCoin);
}


checkCashRegister(13,[7,2,3,6]);

