const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', event => {

    event.preventDefault();

    const regexPattern = /^[a-z]{11,}$/;
    const username = form.username.value;
    const pass = regexPattern.test(username);

    if(pass){
        feedback.textContent = "Username is valid";
    }else{
        feedback.textContent = "Username must be all lowercase and be at least 11 characters";
    }
});