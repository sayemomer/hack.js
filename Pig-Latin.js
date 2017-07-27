function findMatchIndex(splitStr,vowel){
  for( let i=0;i<splitStr.length ;i++){
  
  for(let j=0 ;j<vowel.length;j++){
    
    if( splitStr[i] === vowel[j]){
      
       return i ;

    }
  }
}
}

function translatePigLatin(str) {
  
  const vowel=["a","A","e","E","i","I","o","O","u","U"];
  let splitStr= str.split("");
  let foundVowel =findMatchIndex(splitStr,vowel);
  let y=str.slice(foundVowel).split("");
  return  y.concat(str.substr(0,foundVowel)+"ay").join("");
} 

translatePigLatin("california");
