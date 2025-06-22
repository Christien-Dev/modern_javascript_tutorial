// object literal

let user = {
    name: "Inte",
    age: 30,
    email: "inte@gmail.com",
    location: "toronto",
    blogs: [
        "Something has to be done",
        "3d Printing"
    ]
}

console.log(user);
console.log(user.name);
user.age = 35;  //dot notation 
console.log(user.age);
console.log(user["name"]);  
user["name"] = "Foo";
console.log(user["name"]);  

console.log(typeof user);