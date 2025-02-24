// object in arrays

// const blogs = [
//     {title: "TITLE A", likes: 30},
//     {title: "TITLE B", likes: 20},
//     {title: "TITLE C", likes: 40},
// ];

// console.log(blogs);

let user = {
    name: "Inte",
    age: 30,
    email: "inte@gmail.com",
    location: "toronto",
    blogs: [
        {title: "TITLE A", likes: 30},
        {title: "TITLE B", likes: 20},
        {title: "TITLE C", likes: 40},
    ],
    login: function(){
        console.log(`Login user: ${this.name}`);    //  `this.`keyword is a context object, represents the context in which the current code is executing 
    },
    logout: () => {
        console.log("User has logged out");
    },
    logBlogs: function(){
        console.log("Here are the user's blogs: ");
        this.blogs.forEach( blog => {
            console.log(blog.title, blog.likes);             // throws a `not defined` error since we arent using the `this` keyword to reference the object
        })
    },
    toString: () => {
        console.log(this);      //The following function will use the `this` keyword in reference to where the function is being called in the document
                                //In this case we call it below which it is then located in the root of the dcoument and therefore will represent the global context, window
                                //In order to user the this keyword in a function it must be in a regular function syntax like below
    },
    hellowWorld(){
        console.log("Hello World");     //regular functions with the shorthand syntax
    }
}

user.logBlogs();
