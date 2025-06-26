// Async & Await


// The "async" function declaration creates a binding of a new asynchronous function to a given name
// An async function will ALWAYS return a promise, even if the body of the async function is empty
// The "await" keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains

const getTodos = async () => {
    
    // The "await" operator is used to wait for a Promise and get its fulfillment value
    // It can only be used inside an async function or at the top level of a module
    
    const response = await fetch('todos/todoss_1.json');     // returns a promise so we use await
    console.log(response);
    if(!response.ok){                                       // The fetch function does not automatically reject the promise for HTTP error statuses (e.g., 404, 500). 
        throw new Error("Can't fetch the data");            // Instead, it resolves the promise regardless of the status code, leaving it up to the developer to check the response.ok property. Can add a custom message
    }
    const data = await response.json();                     // json.parse() returns a promise so we use await
    return data;

};

console.log("1");
console.log("2");
getTodos()
    .then( data => console.log('Resolved: ', data))
    .catch( err => console.log('Rejected: ', err.message));         // This can be triggered by deforming the json file
console.log("3");
console.log("4");

// ~~OUTPUT~~ 
// 1
// 2
// 3
// 4
// Resolved: -> (3) [{…}, {…}, {…}]
