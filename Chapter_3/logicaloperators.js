console.log("______LOGICAL OPERATORS_____\n");


const password = "pass@";

if(password.length >= 10 && password.includes("@")){
    console.log("Very Strong password");
}else if (password.length >= 8 || password.includes("@") && password.length >=5){
    console.log("Strong password");
}else {
    console.log("Not Strong password");
}