const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(form.username.value);
});

// Live Feed Back via the keyup event
const regex = /^[a-zA-Z]{5,}$/;
form.username.addEventListener('keyup', e => {
    const username = e.target.value;
    if(regex.test(username)){
        form.username.setAttribute('class', 'success');
    }else{
        form.username.setAttribute('class', 'error');
    }
});