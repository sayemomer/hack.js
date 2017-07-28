function fearNotLetter(str) {
  
  var splitStr =str.split("");
  var inatialValue=splitStr[0].charCodeAt() ;
   inatialValue++;

 for( let i=1 ;i<splitStr.length ;i++){

   if(splitStr[i].charCodeAt() !== inatialValue){
     
     console.log( String.fromCharCode(inatialValue) );
   }
   inatialValue++ ;
 }
    
  
}

fearNotLetter("abce");
