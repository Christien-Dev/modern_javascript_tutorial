// Primitive Types (STACK)                  Reference Types (HEAP)
// - numbers                                - all types of objects (All of the below):
// - strings                                    -> object literals
// - booleans                                   -> arrays
// - null                                       -> functions
// - symbols                                    -> dates
// - undefined                                  -> all other objects

/*
Stack vs Heap

Stack: is used to store local variables in a LIFO order. Typically to access objects on the stack we have a variable name which acts as the key and the value is stored on the stack

Heap: is used to store bigger objects and data structures. To access these structures on the heap we assign a variable to the stack which points to a memory allocation on the heap
*/

//Hoisting
console.log(someVar);           // results in a value of `undefined`
var someVar = "something";      // Variables declared with var keyword are "hoisted and initialized" however their value is undefined before the declaration statment is reached

// console.log(someVar);           // results in an `ReferenceError` being thrown
// let someVar = "something";      // Variables declared with let keyword are "hoisted but NOT initialized" until their definition is evaluated


//Creating global object property
// At the top level, let, unlike var, does not create a property on the global object
var foo = "Foo"; // globally scoped
let bar = "Bar"; // globally scoped but not part of the global object

console.log(window.foo); // Foo
console.log(window.bar); // undefined

console.log("Primitives");
//Primitives
let scoreOne = 50;          //creates a scoreOne with value 50 and stores it as a seperate part of memory on the stack
let scoreTwo = scoreOne;    //creates a scoreTwo with value same as scoreOne at this point in time (50) and stores it as a seperate part of memory on the stack
console.log("score 1 before change: ", scoreOne);
console.log("score 2 before change: ", scoreTwo);

scoreOne = 20;              //scoreOne changes to 20 however scoreTwo remains as 50 becuase it is a separate partition of memory on the stack and is uninfluenced by scoreOne's value

console.log("score 1 after change: ", scoreOne);
console.log("score 2 after change: ", scoreTwo);

console.log("References");
//Reference
let userOne = {name: "test", age: 27};  // creates a pointer on the stack which points to the object on the heap
let userTwo = userOne;                  // creates a seperate pointer on the stack which points to the saee object that userOne is pointing to
console.log("User 1 before change: ", userOne);
console.log("User 2 before change: ", userTwo);

userOne.name = "CHANGED";    //This will change both userOne and userTwo as they are seperate on teh stack BUT point to the same object on the heap;
console.log("User 1 after change: ", userOne);
console.log("User 2 after change: ", userTwo);

