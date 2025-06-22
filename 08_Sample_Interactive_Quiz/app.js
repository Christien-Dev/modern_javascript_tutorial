const correctAnswers = ['B', 'C', 'D', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault(); //prevents the page from being refreshed since this is the default action of an input tag with `type="Submit"`

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 20;
        }
    });

    // // show result on page
    // result.classList.remove('d-none');
    // const resultChild =  Array.from(result.children);
    // Array.from(resultChild[0].children)[0].innerHTML = `You scored <span class="text-primary display-4 p-3">${score}%</span>`;

    // Better answer
    scrollTo(0,0);
    const span = result.querySelector('span');
    
    result.classList.remove('d-none');
    
    let total = 0;
    const scoreTicker = setInterval( () =>{
        span.textContent = `${total}%`;
        if(total++ === score){
            clearInterval(scoreTicker);
        }
    },100)

});
