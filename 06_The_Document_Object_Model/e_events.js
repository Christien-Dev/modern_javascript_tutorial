const button = document.querySelector('button');

const items = document.querySelectorAll('li');

// items.forEach( item => {
//     item.addEventListener('click', event => {
//         console.log(event.target);
//         console.log(item);
//         event.target.style.textDecoration = 'line-through';
//     })
// })


const ul = document.querySelector('ul');


//Add new element to list each time we click the button
button.addEventListener('click', () => {
    
    // Method 1
    // ul.innerHTML += "<li>Something New</li>";


    // Method 2
    const li = document.createElement('li');
    li.textContent = "Something New";
    //sends to the bottom of the list
    ul.append(li);
    //sends to the top of the selected Parent item
    // ul.prepend(li);

});


// Deleting items by adding event listeners to the LI
// items.forEach( item => {
//     item.addEventListener('click', event => {
//         console.log("event in li");
//         event.target.remove();
//         event.stopPropagation();    //Stops EVENT BUBBLING from happening to the parent
//     })
// });


// Taking advantage of event bubbling to delet LI when add an envent listener for UL
ul.addEventListener('click', (event) => {
    // console.log("event in ul");
    console.log(event.target);
    if(event.target.tagName === 'LI'){
        event.target.remove();
    }
});