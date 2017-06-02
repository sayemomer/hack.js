function rot13(str) {
  
  var newstr=str.split("").map( (x)=> x.charCodeAt()>=65 && x.charCodeAt()<=90 ? String.fromCharCode(x.charCodeAt() >77 ?x.charCodeAt()-13 : x.charCodeAt()+13 ) : x )
  
  return  newstr.join("");
}

rot13("SERR PBQR PNZC")
