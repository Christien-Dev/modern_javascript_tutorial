console.log("______Booleans_____\n");

//booleans and comparison
console.log(true, false, "true", "false");

//methods can return booleans
let email = "This is my email here";
let names = ["foo", "bar", "baz"];

let result = email.includes("here");
let results = names.includes("foo");

// console.log(result);
// console.log(results);

//comparison operators
let age = 25;

// console.log(age == 25);  //true
// console.log(age == 30);  //false
// console.log(age != 30);  //true
// console.log(age > 20);   //true
// console.log(age < 20);   //false
// console.log(age <= 25);  //true
// console.log(age >= 25);  //true

let name = "shane";
// console.log(name == "shane");   //true
// console.log(name == "Shane");   //false
// console.log(name > "crystal");  //true, This will be true as it compares the first letter of each word with respect to order in the alphabet, s comes later than c therefore its greater
// console.log(name > "Shane");    //false, lower case letters are greater than any uppercase letters 


//Loose Comparison => checks for value only (different types can still be equal)
// console.log(age == 25);     //true
// console.log(age == '25')    //true, behind the scenes JavaScript is converting that String '25' into a Number before it gets evaluated IMPLICIT TYPE CONVERSION
// console.log(age != 25);        //false 
// console.log(age != '25');      //false

//Strict Comparison => checks for value and type
console.log(age === 25);    //true
console.log(age === '25');  //false, a number cant be equal to a string therfore false
console.log(age !== 25);    //false
console.log(age !== '25');  //true, a number cant be equal to a string therefore true
