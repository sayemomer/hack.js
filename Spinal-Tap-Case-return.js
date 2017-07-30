function findTap(str){

  for (let i=1 ;i<str.length;i++){
    
    if( str[i].charCodeAt() >= 65 &&  str[i].charCodeAt() <= 90 && str[i-1] !=" " && str[i-1] !="_" ){
      
      str=str.substr(0,i).concat(" ").concat(str.substr(i,str.length));
      
    }
  }
  return str ;
  
}

function spinalCase(str) {
  
  let newstr=findTap(str);
  var newstr1=newstr.split("").map( (x)=> x===" " || x==="_"    ? "-" :x ); 
 return newstr1.map( (x)=> x.charCodeAt() >= 65 &&  x.charCodeAt() <= 90 ? x.toLowerCase():x).join("");
}

spinalCase("thisIsSpinalTap");
