//function declaration  (hoisting IS implemented)
function greet(){
    console.log("Hello There");
}

//invoking the function
greet();


// This wouldnt work
// hoisting means to bring function declarations to the top of the file in a sense so we can call them whenever even if they come after invoking the function 
// speak();

// const speak = function(){
//     console.log("Good day!");
// };

//function expression - get a variable and set it equal to a function, ends with a semi-colon (hoisting IS NOT implemented)
const speak = function(){
    console.log("Good day!");
};

speak();
