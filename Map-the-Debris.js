function  approcimateCalculation(orbitalPeriod){
  
  var newStringArray =orbitalPeriod.toString();
  var considerationValue =newStringArray.slice(
    newStringArray.indexOf('.')+1
    ).split('')[0] ;
  
  if( considerationValue > 5 ){
    
    return Math.ceil(orbitalPeriod);
  }
  
  return Math.floor(orbitalPeriod)
}

function helperCalculation(arr){
  
  var final={};
  var orbitalPeriod;
     
  orbitalPeriod= (2 * Math.PI ) *Math.sqrt (
    Math.pow((arr.avgAlt+earthRadius),3)/GM);
  
  final.name=arr.name;
  final.orbitalPeriod= approcimateCalculation( orbitalPeriod );
  
  return final;
  
}

function orbitalPeriod(arr) {
  
  var result=[];
  GM = 398600.4418;
  earthRadius = 6367.4447;
  
  for ( let i =0 ;i<arr.length ;i++){
    
    result.push( helperCalculation( arr[i]) );
    
  }
  
  return result ;
}

orbitalPeriod( [{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}] );
