console.log("______IF STATEMENTS_____\n");

const age = 25;
if(age > 20){
    console.log("You are over 20 years old");
}

const names = ["foo","barz","baaz","inte"];

if(names.length > 3){
    console.log("That's a lot of names");
}

const password = "password";

if(password.length >= 10){
    console.log("Very Strong password");
}else if (password.length >= 8){
    console.log("Strong password");
}else {
    console.log("Not Strong password");
}