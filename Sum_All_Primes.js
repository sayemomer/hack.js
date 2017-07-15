// noprotect
function sumPrimes(num) {
  var arr=[];
  var sum=0;

for(let i=2;i<=num;i++){
  for( let j=1 ;j<=1000;j++)
  {
     if( i%j===0){
                 arr.push(j);
                }
    
  }
  
  if(arr.length===2)
  {
   sum=sum+i;}
   arr.length=0 ;

}
 return sum;
 
}

sumPrimes(977);
