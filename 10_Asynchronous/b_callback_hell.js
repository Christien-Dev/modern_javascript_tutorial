const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }else if(request.readyState === 4){
            callback('Could not fetch data', undefined);
        }
    });
    
    // request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    request.open("GET", resource);
    request.send();
}

//Callback hell, since we are constantly interchaining callbacks and it looks messy
// This can occur when one request's data is needed to make another request so we have to wait for the data to come backprior to making the request
getTodos( 'todos/todos_1.json', (err, data) => {
    console.log(data);
    getTodos( 'todos/todos_2.json', (err, data) => {
        console.log(data);
        getTodos( 'todos/todos_3.json', (err, data) => {
            console.log(data);
        });
    });
});


