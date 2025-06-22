const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', event => {
    event.preventDefault();
    //Here we get the username value from our querySelector
    // console.log(username.value);

    //Here we get the username from our form by referencing the id attribute, can also be done with the name attribute
    console.log(form.username.value);
});

const username = 'Chris';
const regex = /^[a-zA-Z]{5,}$/;

let result = regex.test(username);
let searchResult = username.search(regex);

console.log(`Does the username ${username} pass the test: ${result}`);
console.log(searchResult)