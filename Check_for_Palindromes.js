function palindrome(str) {
  
   return str.toLowerCase().split("").reverse().join("") === str.toLowerCase() ? true : false ;
}



palindrome("eye");
