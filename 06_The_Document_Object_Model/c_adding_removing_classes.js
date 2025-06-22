const content = document.querySelector('h3');
console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');
content.classList.remove('success');

// Challenge to sort p tage based on containing success, error or none
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach( p => {

    //Using textContent will find us all the visible/non-visible text in the tag
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }else if(p.textContent.includes('success')){
        p.classList.add('success');
    }
})

const loremTitle = document.querySelector('.lorem');
loremTitle.classList.toggle('ipsum');
loremTitle.classList.toggle('ipsum');