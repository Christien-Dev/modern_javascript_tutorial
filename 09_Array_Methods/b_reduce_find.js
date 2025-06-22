// REDUCE METHOD - a non-destructive action that iterates over an array, applying a reducer function to each element, accumulating a single output value
// reduce in math terms means to simplify an expression, typically by finding and eliminating common factors. In the below example we provide the common factor of the value being greater than 50

// EXAMPLE 1
const scores = [10, 20, 60, 40, 70, 90, 30];

const result = scores.reduce( (acc, curr) => {
    if(curr > 50){
        acc++;
    }
    return acc;
}, 0);

console.log(result);


// EXAMPLE 2
const playerScores = [
    { player: "mario", score: 50},
    { player: "yoshi", score: 20},
    { player: "mario", score: 40},
    { player: "wario", score: 30},
];

const marioTotal = playerScores.reduce( (acc, curr) => {
    if(curr.player === "mario"){
        acc += curr.score
    }
    return acc;
}, 0);

console.log(marioTotal);


// FIND METHOD - looks through an array and returns the first item that meets a specific condition you provide. If no item matches, it returns undefined. It skips any empty space in the array and is non-destructive

const firstHighScore = scores.find( score => score > 50 );

console.log(firstHighScore);