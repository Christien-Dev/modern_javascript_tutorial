console.log("______BREAK AND CONTINUE_____\n");


const scores = [ 16, 25, 34, 0, 100, 43, 25, 62, 71];

for (let index = 0; index < scores.length; index++) {

    if(scores[index] === 0){
        continue;   //ignore the rest of the code and go to the next iteration
    }

    console.log("score: ", scores[index]);
    if(scores[index] === 100){
        console.log("Congrats, top score");
        break;  //break out of the loop 
    }
    
}