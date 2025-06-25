// Async & Await

const getTodos = async () => {
    
    const response = await fetch('todos/todos_1.json');
    const data = await response.json();
};

const test = getTodos();
// console.log(test);

// fetch('todos/todos_1.json').then( response => {
//     console.log('Resolved: ', response);
//     //This returns a promise, so we can tack on the .then() clause
//     return response.json();
// }).then( data => {
//     console.log(data);
// }).catch( error => {
//     //We only get here if we get some kind of network error
//     console.log('Rejected: ', error);
// });