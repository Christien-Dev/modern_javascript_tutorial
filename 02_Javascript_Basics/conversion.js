console.log("______Conversions_____\n");

let score = '100';

// console.log(score + 1);     // this will result in concatenation resulting in a string '1001'
score = Number(score);
console.log(score+1);          // this will result in conversion resulting in a number '101'
console.log(typeof(score));

// let results = Number("hello");   //cant turn a string into a number
// console.log(results);

// let result = String(50);            //turns the number 50 to a string 
// console.log(result, typeof(result));

// let result = Boolean(100);              //this will result in a truthy value numbers > 0 || numbers < 0 are considered truthy BUT 0 is considered false
let result = Boolean("0")                  //Strings of any length are always truthy HOWEVER any empty string is considered false 
console.log(result, typeof(result));

