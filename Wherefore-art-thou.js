function whatIsInAName(collection, source) {
   
   let resultArray=[];
   let flag=0 ;
 
 for( let i=0 ;i<collection.length;i++){
   
   for(let j=0 ;j< Object.keys(collection[i]).length ;j++){
     
     for( let k=0 ;k<Object.keys(source).length ;k++){
       
       if( Object.values( collection[i] )[j]==Object.values(source)[k]  && Object.keys( collection[i] )[j]==Object.keys(source)[k] ){
         
         
       flag++;
     }
     
     }
     
     
   }
   console.log(flag);
   
   if( flag === Object.keys(source).length){
     resultArray.push( collection[i] );
   }
   flag=0;
 }
  
  return resultArray ;

}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })
