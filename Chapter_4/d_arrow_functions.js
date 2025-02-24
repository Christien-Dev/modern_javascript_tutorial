//regular function expression
const calcArea = function(radius){
    return 3.14 * (radius**2);
};

//arrow function
const calcAreaArrow = (radius) => {
    return 3.14 * (radius**2);
};

//In the case of 1 argument being passed to an arrow function we can take away the brackets in the function declaration
const calcAreaArrow2 = radius => {
    return 3.14 * (radius**2);
};

//When we just have a single return line in a function we can remove the `return` keyword and take away the curly braces {} like so
const calcAreaArrow3 = radius => 3.14 * (radius**2);



const area = calcAreaArrow(1);
console.log(area);

const area2 = calcAreaArrow2(2);
console.log(area2);

const area3 = calcAreaArrow3(3);
console.log(area3);

//practice turning a regular function into an arrow function
//function 1
const greet = function(){
     return "Hello World";
};

const greetArrow = () => "Hello World!";
console.log(greetArrow());

//function 2
const bill = function(products, tax){
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total+=products[i] + (products[i]*tax)        
    };
    return total;
}

console.log(bill([1,5,7], 0.13));

const billArrow = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total+=products[i] + (products[i]*tax)        
    };
    return total;
};

console.log(billArrow([1,5,7], 0.13));






