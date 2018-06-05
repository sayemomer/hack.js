function getMultiples(firstValue, secondValue){
var multipliers1 =[];
var multipliers2 =[];
for( var i=1 ;i<=10000;i++){
  multipliers1.push(firstValue*i);
  multipliers2.push(secondValue*i)
}
return [multipliers1,multipliers2];
}

function checkAvailable(minedNumber,firstValue, secondValue){

  var flag =0 ;
  var num=0;

  for( var i=firstValue ; i<=secondValue;i++){
      if( minedNumber%i ==0 ){
        flag++;
        
      }
      num++;
  }
  
return  flag=== num ? "ok":"nope";

}


function findCommon(multipliers, firstValue, secondValue){
var  firstDataArray =multipliers[0];
var  secondDataArray =multipliers[1];
var result=0;

for( var i=0 ;i<firstDataArray.length ;i++){

for( var j=0 ;j<secondDataArray.length;j++){

  if( firstDataArray[i]=== secondDataArray[j]){
    
    if ( checkAvailable( firstDataArray[i],firstValue,secondValue) === "ok")  {
      result = firstDataArray[i];
      break;

    }
  }

}
}

return result ;

}

function smallestCommons(arr) {
  var largestValue;
  var smallValue ;

  if( arr[0]> arr[1]){

    largestValue=arr[0];
    smallValue = arr[1];    
  }
  else{
    largestValue =arr[1];
    smallValue = arr[0];
  }

  

  return findCommon(getMultiples(arr[0],arr[1]) ,smallValue,largestValue ); 
}


smallestCommons([1, 13]);
