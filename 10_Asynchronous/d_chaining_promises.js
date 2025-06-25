const getTodos = (resource, callback) => {

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

// The then method returns a new Promise, which allows for method chaining. If the function passed as handler to then returns a Promise, 
// an equivalent Promise will be exposed to the subsequent then in the method chain.

// It can also be noted that when we tag on the .catch() to a chain of .then() it will catch any error in the chain and NOT just the previous .then()
//  The below code shows an example of such behaviour for chaining and catching on the chain being used together


getTodos('todos/todos_1.json').then(data => {
    console.log('Promise 1 resolved: ', data);
    return getTodos('todos/todos_2.json')           // getTodos returns a Promise therefore we can chain
}).then(data=>{
   console.log('Promise 2 resolved: ', data);
   return getTodos('todos/todos_3.json');           // getTodos returns a Promise therefore we can chain
}).then(data=>{
   console.log('Promise 3 resolved: ', data);       
}).catch( error => {
    console.log('Promise rejected: ', error)
});


// A chain can be started after calling .catch() on a promise. The .catch() method returns a new promise, allowing further chaining. This is useful for handling errors and continuing with subsequent operations

const p1 = new Promise((resolve, reject) => {
  resolve("Success");
});

p1.then((value) => {
    console.log(value); // "Success!"
    throw new Error("oh, no!");
}).catch((e) => {
    console.error(e.message); // "oh, no!"
}).then(
    () => console.log("after a catch the chain is restored"), // "after a catch the chain is restored"
    () => console.log("Not fired due to the catch"),
);







//Some GOTCHYAS with catch statements

// Throwing an error inside a .then() or .catch() callback will most of the time trigger the .catch() method in the promise chain. This is because the thrown error is treated as a rejection of the promise
Promise.resolve("success")
  .then(data => {
    console.log(data); // Output: "success"
    throw new Error("Something went wrong"); // This triggers the `.catch()`
  })
  .catch(err => {
    console.error("Caught error:", err.message); // Output: "Caught error: Something went wrong"
  });



// However, errors thrown inside asynchronous functions will act like uncaught errors:
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("Uncaught Exception!");
  }, 1000);
});

p2.catch((e) => {
  console.error(e); // This is never called since the error is thrown inside an async function
});


// Errors thrown after resolve is called will be silenced:
const p3 = new Promise((resolve, reject) => {
  resolve();
  throw new Error("Silenced Exception!");
});

p3.catch((e) => {
  console.error(e); // This is never called since we resolved above
});


// catch() is not called if the promise is fulfilled

// Create a promise which would not call onReject
const p1 = Promise.resolve("calling next");

const p2 = p1.catch((reason) => {
  // This is never called
  console.error("catch p1!");
  console.error(reason);
});

p2.then(
  (value) => {
    console.log("next promise's onFulfilled");
    console.log(value); // calling next
  },
  (reason) => {
    console.log("next promise's onRejected");
    console.log(reason);
  },
);