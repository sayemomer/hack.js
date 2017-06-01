function destroyer(arr,...num) {
  
 
  return arr.filter( (x)=> x!==num[0] && x!==num[1] && x!==num[2]);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3,4);
