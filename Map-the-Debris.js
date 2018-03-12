function orbitalPeriod(arr) {
  
  var result=[];
  var final={};
  
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var orbitalPeriod;
  
  orbitalPeriod= (2 * Math.PI ) *Math.sqrt ( Math.pow((arr[0].avgAlt+earthRadius),3)/GM);
  
  final.name=arr[0].name;
  final.orbitalPeriod=Math.ceil(orbitalPeriod);
  
  result.push( final );
  
  
  
  return result ;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
