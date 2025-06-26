// Fetch API

//fetch() method start the process of fetching a resource from the network and returns a promise that is fulfilled once the response is available
// fetch('todos/todos_1.json').then( response => {
//     console.log('Resolved: ', response);
//     return response.json();                         // response.json returns a promise. If we resolve it, in the next .then() statement we will get the actual json data 
// }).then( data => {
//     console.log(data);                              // This will now give us the json object since we resolved the previous response.json promise
// }).catch( error => {
//     console.log('Rejected: ', error);               // We only get here if we get some kind of network error
// });




// Simple Chaining example
// fetch('todos/todos_1.json').then(response => {                      // resolve for first chain
//     console.log('Promise 1 resolved: ', response.json);             // response.json returns a promise. If we resolve it, in the next .then() statement we will get the actual json data 
//     return fetch('todos/todos_2.json');
// }).then( response => {                                              // resolve for second chain
//     console.log(`here is the todos 2 data: ${response.json}`);
// }).catch( error => {                                                // reject for all chained promises from fetch
//     console.log("Error was encountered, promise rejected")
// })


// // Chaining with fetch api
fetch('todos/todos_1.json').then(response => {
    console.log('Resolved response 1: ', response);
    return response.json();
}).then(data=>{
   console.log(data);
   return fetch('todos/todos_2.json')
}).then(response=>{
    console.log('Resolved response 2: ', response);
   return response.json();
}).then(data=>{
   console.log(data);
}).catch( error => {
    // Since we are using fetch we only get here if we encounter a network error 
    console.log('Promise rejected: ', error)
});