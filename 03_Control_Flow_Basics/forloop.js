console.log("______FOR LOOPS_____\n");
    //initialize      //condition      //expression at the end of code block 
for(let i = 0;        i < 5;           i++){
    // console.log("in loop: ", i);
}

// console.log("loop finished");

const names = ["foo","barz","baaz"];
for(let i = 0; i < names.length; i++){
    // console.log("name: ", names[i]);
    let html = `<div>${names[i]}</div>`
    console.log(html);
}
