function titleCase(str) {
  
var newstr=str.split(" ").map( (x)=>x[0] == x[0].toUpperCase() ? x.toLowerCase().replace(x[0].toLowerCase(),x[0].toUpperCase()) : x.replace(x[0],x[0].toUpperCase()) );
/* compare the first element of the string doing the upper case ! , if true lowercase the whole string
  and replace the 1st element  with the upper case . other wase*/
return newstr.join(" ");
  
  
}

titleCase("I'm a little tea pot")
