function confirmEnding(str, target) {
  if(target.length==1)
  {
    var array=str.split("");
    return array[array.length-1]===target ? true  : false ;
  }
  else
  var array=str.split(" ");

  return array[array.length-1].substr(-target.length,target.length) === target ? true  : false  ;
  
}

confirmEnding("Open sesame", "same");
