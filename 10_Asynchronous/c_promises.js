const getTodos = (resource) => {

    return new Promise( (resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            }else if(request.readyState === 4){
                reject('error getting resource');
            }
        });
        
        // request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
        request.open("GET", resource);
        request.send();
    });
};

// PROMISE SYNTAX
// A promise takes a function as an argument, this function contains 2 parameters: 
//      resolve: static method "resolves" a given value to a Promise. If the value is a promise, that promise is returned; 
//              if the value is a thenable, Promise.resolve() will call the then() method with two callbacks it prepared; 
//              otherwise the returned promise will be fulfilled with the value.
//      reject: static method returns a Promise object that is rejected with a given reason
// Syntax example below



const getSomething = () => {

    return new Promise( (resolve, reject) => {
        // ...action performed, we fetch some data
        resolve('some data');
        // ...action performed, we failed to fetch some data
        // reject('some error');
    });
};


// .then() SYNTAX
// The .then(callback1, callback2) method of a promise takes up to 2 callback functions as parameters when having a function parameter for the promise
//  eg. new Promise((resolve, reject) => { ... }).then( callback1, callback2)
//      callback1: handles what to do when a promise is RESOLVED
//      callback2: handles what to do when a promise is REJECTED
// If the function passed as handler to then returns a Promise, an equivalent Promise will be exposed to the subsequent then in the method chain

// It can also only take 1 callback as a parameter. In this case you only handle the fulfillment (resolve) of the promise but NOT the rejection
//  eg. new Promise.resolve("some succress").then( data => { ... })
// You can also only handle the rejection of the promise but NOT the fulfillment (resolve)
//  eg. new Promise.reject("some error").then( null, err => {})
// This is known as "Partial Handling" 
// Syntax example below


// Example 1 - Using .then() to handle both resolved and reject cases (2 callbacks)
// getSomething().then( (data) => {
//     console.log(data);
// }, (error) => {
//     console.log(error);
// });

// Example 2 - Partial Handling of the RESOLVE case
// Promise.resolve("success").then(data => {
//   console.log("Fulfilled:", data); // Output: "Fulfilled: success"
// });

// OR

// const testPromiseResolve = new Promise((resolve, reject) => {
//   resolve("Success!");
// });

// testPromiseResolve.then((value) => {
//   console.log(value);
//   // Expected output: "Success!"
// });

// Example 3 - Partial Handling of the REJECT case
// Promise.reject("some error").then(null, err => {
//   console.log("Error: ", err); // Output: "Error: some error"
// });

// OR

// const testPromiseReject = new Promise((resolve, reject) => {
//   reject("some error");
// });

// testPromiseReject.then(null, err => {
//   console.log("Error: ", err );
//   // Expected output: "Error: some error"
// });



// Solution 1 - A little bit cluttered and not as clean
getSomething().then( data => {
    console.log(data)
}, error => {
    console.log(error)
});

// .catch() SYNTAX
// the .catch() method of Promise instances schedules a function to be called when the promise is rejected. It immediately returns another Promise object, allowing you to chain calls to other promise methods
// It takes 1 argument and that is a function to asynchronously execute when this promise becomes rejected. the function contains 1 parameter called the reason, which is the value that the promise was rejected with

//Under the hood, catch() internally calls then() on the object upon which it was called, passing undefined and onRejected as arguments



// Solution 2 - A little bit more clean

// const promiseErrorCatch = new Promise.reject("Some Error")
// promiseErrorCatch.catch( err => { console.log("Error: ", err)});

// OR

// const promise1 = new Promise((resolve, reject) => {
//   throw new Error("Uh-oh!");
// });

// promise1.catch((error) => {
//   console.error(error);
// });


// Solution 2 - Using catch to clean up the error handling
getSomething().then( data => {
    console.log(data)
}).catch(error => {
    console.log(error)
});


getTodos( 'todos/todos_1.json').then(data => {
    console.log('Promise resolved: ', data);
}).catch( error => {
    console.log('Promise rejected: ', error)
})