console.log("______SCOPE_____\n");

let age = 30;

if(true){
    let age = 40;   //This is allowed inside the if statement even though its already defined outside, only gets created inside the if (local scope inside if statement)
    let name = "shane"
    console.log("inside 1st code block: ", age, name);
    if(true){
        let age = 50;
        console.log("inside 2nd code block: ", age);
        var test = "hello I ignore scope";  //`var` ignores block scope which is why `let` is used in favour of it
    }
}

console.log("outside code block: ", age, name, test);
