const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    console.log("Copied the content");
});


const box = document.querySelector('.box');
box.addEventListener('mousemove', event => {
    // console.log(event.offsetX, event.offsetY);
    box.textContent = `x: ${event.offsetX}, y: ${event.offsetY}`;
});

document.addEventListener('wheel', event => {
    console.log(event.pageX, event.pageY);
})
