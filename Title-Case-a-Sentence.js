function titleCase(str) {
  
var newstr=str.split(" ").map( (x)=>x[0] == x[0].toUpperCase() ? x.toLowerCase().replace(x[0].toLowerCase(),x[0].toUpperCase()) : x.toLowerCase().replace(x[0],x[0].toUpperCase()) );
  
return newstr.join(" ");
  
  
}

titleCase("I'm a little tea pot")
