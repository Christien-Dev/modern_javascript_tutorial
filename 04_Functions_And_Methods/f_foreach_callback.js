// Callbacks and ForEach

const myFunc = (callback) => {
    let value = 50;
    callback(value);
}

//Using a regular Function
myFunc(function(value){
    console.log(`Value: ${value}`);
})

//Using Arrow function

myFunc( value => {
    console.log(`Value from Arrow Function: ${value}`);
});

let people = ['foo', 'bar', 'inte', 'jerz'];

people.forEach(function(person, index){
    console.log(index, person);
})

console.log('Using Arrow Function');
people.forEach( (person, index) => {
    console.log(index, person);
});

//Instead of the above we could also pass an arrow function into the forEach method
const logPerson = (person, index) => {
    console.log(`${index}: ${person}`)
};

console.log('Assigning arrow function to a variable and passing it to forEach method');
people.forEach(logPerson);