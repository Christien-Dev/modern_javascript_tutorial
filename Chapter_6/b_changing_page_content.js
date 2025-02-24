//Grab the first node in the dom which has a 'p' tag
const para = document.querySelector('p');

console.log(para);
//Changes the active text
para.innerText = "Some new text"

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += " some new text";
})

const content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML = '<h2> This is a new H2 tag </h2>';

const list = ['foo', 'bar', 'baz'];

list.forEach(item =>{
    content.innerHTML += `<p>${item}</p>`
});

