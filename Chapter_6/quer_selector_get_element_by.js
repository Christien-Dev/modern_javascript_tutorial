const para = document.querySelector('p')
const classSelector = document.querySelector('div.info')
const idSelector = document.querySelector('#info')
console.log(para);
console.log(classSelector);


//Gets a reference to all the p tags in the DOM
const paras = document.querySelectorAll('p');
console.log(paras[2]);
console.log("Getting all p tags");
paras.forEach(para =>{
    console.log(para);
});

//Gets a reference to all the tags with class 'info' in the DOM
const paras2 = document.querySelectorAll('.info');
console.log("Getting all tags with 'info' class");
paras2.forEach(para =>{
    console.log(para);
});

//Get an element by its Id
const title = document.getElementById('page-title')
console.log(title);

//Get an elements by its class Name
const className = document.getElementsByClassName('info')
console.log(className);

//Get an elements by its tag Name
const tagName = document.getElementsByTagName('p')
console.log(tagName);
