function chunkArrayInGroups(arr, size) {
  
let left = []
let right = []
if( arr[0]===Number)
{
  left.push(arr.slice(0,arr.indexOf(size)))
right.push(arr.slice(arr.indexOf(size), arr.length))

const finalArr = left.concat(right)

return finalArr ;
  
}
else{
  
  left.push(arr.slice(0,size))
right.push(arr.slice(size, arr.length))

const finalArr = left.concat(right)

return finalArr ;
  
  
}

}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)


// A full implimentation with LOdash 

var _ = require('lodash');

function chunkArrayInGroups(arr, size) {
  
  return _.chunk(arr, size);
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)

