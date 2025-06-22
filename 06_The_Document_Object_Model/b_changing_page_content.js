//Grab the first node in the dom which has a 'p' tag
const para = document.querySelector('p');

console.log(para);
//Changes the active text
para.innerText = "Some new text"


// Changing Inner text for multiple 'p' tags
const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += " some new text";
});

//Changing inner html for div tag with class attribute 'content'
const content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML = '<h2> This is a new H2 tag </h2>';

//Adding additional p tags after a specific tag with the class attribute 'content'
const list = ['foo', 'bar', 'baz'];
list.forEach(item =>{
    content.innerHTML += `<p>${item}</p>`
});

// Getting the href attribute from a link
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

//setting the attribute for href
link.setAttribute('href', "https://www.youtube.com/");
console.log(link.getAttribute('href'));

const h2 = document.querySelector('h2');
console.log(h2.getAttribute('class'));

//setting the attribute for class
h2.setAttribute('class', 'NOTHING');
console.log(h2.getAttribute('class'));

//setting the attribute for color
h2.setAttribute('style', 'color: green;');
h2.style.margin = '100px';
h2.style.margin = '';