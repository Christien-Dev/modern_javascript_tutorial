console.log("______STRINGS_____\n");

let email = "somesome@gmail.com";
let firstname = "Foo";
let lastname = "Barz";
// concatenation of strings
let fullname = firstname + " " + lastname;
console.log(fullname);

//getting characters
console.log(fullname[0]);

//length
console.log(fullname.length);

//string methods
console.log(fullname.toLocaleUpperCase());
let result = fullname.toLowerCase();
console.log("First Index of Email: " + email.indexOf("s"));
console.log("Last Index of Email: " + email.lastIndexOf("c"));
console.log("Slicing Email: " + email.slice(4,10));
console.log("Substr Email: " + email.substr(4,10));
console.log("Replace s with d: " + email.replace("s","d"));

//Template Strings

let scentence = `This person's name is ${fullname}`;
console.log(scentence);

// creating html templates
let html = `
    <h2>${email}</h2>
    <p>${fullname}</p>
`;

console.log(html);