function palindrome(str) {
var newstr=str.toLowerCase().split("")
         .filter( (x)=> x.charCodeAt() == 49 ||(x.charCodeAt() > 97 && x.charCodeAt() < 122) );
                        
return  newstr.join("") === newstr.reverse().join("") ? true : false; 
}


palindrome("1 eye for of 1 eye."); //works ;)

palindrome("eye") // works 
palindrome("_eye") // works !! :D
palindrome("race car") ;
palindrome("0_0 (: /-\ :) 0-0")  // Works !!!!!! woo




