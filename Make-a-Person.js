var Person = function(firstAndLast) {
   
    this.getFullName = function() {
      return firstAndLast;
    };
    
    this.getFirstName = function(){
      return firstAndLast.slice(0,firstAndLast.indexOf(" ") );
    };
    
    this.getLastName = function(){
      return firstAndLast.slice(firstAndLast.indexOf(" ")+1 );
    };
    
    this.setFirstName = function(firstName){
       var lastName= firstAndLast.slice(firstAndLast.indexOf(" "));
      firstAndLast = firstName + lastName ;    
      return firstAndLast;
    };
    
    this.setLastName = function(lastName){
      var firstName= firstAndLast.slice(0,firstAndLast.indexOf(" ")+1);
      firstAndLast = firstName + lastName ; 
      return firstAndLast ;
    };
    
    this.setFullName = function(fullName){
      firstAndLast = fullName ;
      return firstAndLast ;
    };
    
    
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
Object.keys(bob).length; //6
bob instanceof Person ;//true
bob.firstName //undefined
bob.lastName //undefined
bob.getFirstName(); //"Bob"
bob.getLastName(); //"Ross"
bob.setFirstName("Haskell")
bob.setLastName("Curry")



