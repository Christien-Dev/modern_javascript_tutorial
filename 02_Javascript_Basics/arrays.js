console.log("______ARRAYS_____\n");

let ninjas = ['shaun', 'ryu', 'chun-li'];

//override value in array position 1
ninjas[1] = 'chris'
console.log(ninjas[1]);

let arrayResults = ninjas.join(",");
console.log(arrayResults);
console.log("Index of chris: " + ninjas.indexOf("chris"));
console.log(ninjas.concat(["a","b"]));
let newNinjas = ninjas.push("a");   //push is a destructive method
newNinjas = ninjas.pop();           //pop is a destructive method

console.log(newNinjas);


//NULL AND UNDEFINED

let age = null;     //This will take on the value of 0 when we try to output age in a formula, however in a string of any sorts it is just `null`
console.log(age, age + 3, `the age is ${age}`);