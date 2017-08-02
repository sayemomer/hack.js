function getAscii(newstr){
  
    stringAscii=0;
   
  
  for(let i=0 ;i<newstr.length;i++){
    
    stringAscii+=newstr[i]*Math.pow(2,i) ;
    
  }
  
 return stringAscii;
}


function binaryAgent(str) {
  
  let iterationLength=str.split(" ").length;
    let newstr=[];
    let newstr1=str.split(" ");
    let finalString="";
    
  for(let i=0;i<iterationLength;i++){
    
  newstr=newstr1[i].split("").reverse();
    getAscii(newstr);
    finalString+=String.fromCharCode(stringAscii)
    
  }
  return finalString;
 
 
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
