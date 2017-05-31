function repeatStringNumTimes(str, num) {
  
  var newstr="";
for(let i =0;i<num ;i++){
   newstr=newstr.concat(str);
}
 return newstr; 
}

repeatStringNumTimes("abc", 3);
