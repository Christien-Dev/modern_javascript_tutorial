// object literal

let user = {
    //properties
    name: "Inte",
    age: 30,
    email: "inte@gmail.com",
    location: "toronto",
    blogs: [
        "Something has to be done",
        "3d Printing"
    ],


    // methods
    login: function(){
        console.log(`Login user: ${this.name}`);    //  `this.`keyword is a context object, represents the context in which the current code is executing 
    },
    logout: () => {
        console.log("User has logged out");
    },
    logBlogs: function(){
        console.log("Here are the user's blogs: ");
        // console.log(blogs);             // throws a `not defined` error since we arent using the `this` keyword to reference the object
        console.log(this.blogs.forEach( blog => {console.log(blog)}));        // my assumption is its trying to grab blogs from the global context but its not defined, therefore we use this to represent the object
    },
    toString: () => {
        console.log(this);      //The following function will use the `this` keyword in reference to where the function is being called in the document
                                //In this case we call it below which it is then located in the root of the dcoument and therefore will represent the global context, `window`
                                //In order to user the this keyword in a function it must be in a regular function syntax like below
    },
    hellowWorld(){
        console.log("Hello World");     //regular functions with the shorthand syntax
    }
}

console.log(this);           //when we use this. within the root of the js document here (not nested in an object) it refers to the global context which is the `window` object
user.login();
user.logout();
user.logBlogs();
user.toString();
