function truncateString(str, num) {
  
  if(num<3){
      return str.slice(0,num).concat("...");
      // if truncatation number is less then 3 then slice the str and concate the default string 
  }
  else{
    return str.length >num ? str.slice(0,num-3).concat("...") : str;
    // if string length is greeter then then trancuate number , then cut the string without the default string and concat the default , otherwise return the small string 
    
  }
 
  
}

truncateString("A-tisket a-tasket A green and yellow basket",9)

//-----------------------Lodash Implimentation--------------------------------//

var _ = require('lodash');
function truncateString(str, num) {
  
  return _.truncate( str ,{ 'length': num ,'omission': "..." })
  
}

truncateString("A-tisket a-tasket A green and yellow basket",6)
