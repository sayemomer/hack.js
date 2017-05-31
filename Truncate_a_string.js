function truncateString(str, num) {
  
  if(num<3){
      return str.slice(0,num).concat("...");
  }
  else{
    return str.length >num ? str.slice(0,num-3).concat("...") : str;
    
  }
 
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 11)
