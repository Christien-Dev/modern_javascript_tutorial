// Fetch API

//fetch() method start the process of fetching a resource from the network and returns a promise that is fulfilled once the response is available
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




// Simple Chaining example
fetch('todos/todos_1.json').then(data => {  //resolve for first chain
    console.log('Promise 1 resolved: ', data);
    return "DATA WAS FOUND AND IS BEING CHAINED";
}).then( data => {                          //resolve for second chain
    console.log(`here is the previous promises' resolved data: ${data}`);
}).catch( error => {    //reject for all chained promises from fetch
    console.log("Error was encountered, promise rejected")
})


// // Chaining with fetch api
// fetch('todos/todos_1.json').then(data => {
//     console.log('Promise 1 resolved: ', data);
//     return fetch('todos/todos_2.json')
// }).then(data=>{
//    console.log('Promise 2 resolved: ', data);
//    return fetch('todoss/todos_3.json');
// }).then(data=>{
//    console.log('Promise 3 resolved: ', data); 
// }).catch( error => {
//     // Since we are using fetch we only get here if we encounter a network error 
//     console.log('Promise rejected: ', error)
// });