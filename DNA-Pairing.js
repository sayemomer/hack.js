function pairElement(str) {
  const dna=["A","T","","G","C",""];
  let splitstr= str.split("");
  let resultArray=[];
  
  for(let i=0 ;i<splitstr.length ;i++){
    
    for(let j=0;j<dna.length;j++){
      
      if( splitstr[i]===dna[j]){
        
        if( dna[j+1] === "")
        {
          resultArray.push( [ splitstr[i]  ,dna[j-1] ]  );
          
        }
        else 
        resultArray.push( [ splitstr[i],dna[j+1] ]  );
      }
    }
    
  }
  return resultArray ;

}

pairElement("GCG");
