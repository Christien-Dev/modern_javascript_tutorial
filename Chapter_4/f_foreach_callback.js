// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(function(value){
//     console.log(value);
// });

// myFunc(value => {
//     console.log(value);
// });

// let people = ["foo", "bar", "inte", "jerz"];

// people.forEach(function(person){
//     console.log(person);
// })

// const logPerson = (person, index) => {
//     console.log(`${index} - ${person}`)
// }

// people.forEach(logPerson);

const people = ["foo", "bar", "inte", "jerz"];
const ul = document.querySelector('.people');

let html = ``;

people.forEach( person => {
    //create an html template for each person
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;