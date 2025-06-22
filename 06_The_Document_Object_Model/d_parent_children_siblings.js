const article =  document.querySelector('article');

console.log(article.children);

//Returns an array instead of the default HTML Collection but doesnt modify the original structure
console.log(Array.from(article.children));

//This will modify each element in the article add a class of article-element
Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});

const title = document.querySelector('h4');

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);
