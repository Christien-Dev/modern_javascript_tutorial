const myName = "foo";

// function - piece of code which is called by name
const greet = () => "hello";
let result = greet();

console.log(result);


// methods - piece of code which is called by name that is associated with an object or data type(invoked using dot notation `object.functionName()` )
// 1. A method is implicitly passed the object on which it was called.
// 2. A method is able to operate on data that is contained within the class (remembering that an object is an instance of a class - the class is the definition, 
//    the object is an instance of that data).
let result2 = myName.toUpperCase();
console.log(result2);
