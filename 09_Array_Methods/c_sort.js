const names = ["foo", "bars", "inte", "jerz", "baz"];

// names.sort();   //Auotmatically sorts strings alphabetically, destructive since it alters the original array
names.reverse();   // Reverses the array in-place, destructive
console.log(names)


const scores = [ 10, 30, 50, 5, 60, 35, 15];


// If compareFn is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order: [10, 15, 30, 35, 5, 50, 60]
scores.sort();  

scores.sort( (a,b) => b - a );  //This will sort in descending order

console.log(scores);


const players = [
    { player: "mario", score: 50},
    { player: "yoshi", score: 20},
    { player: "mario", score: 40},
    { player: "wario", score: 30},
    { player: "waluigi", score: 70}
];

// The following is an example of a compare function (compareFn)
// When a compare function is provided all array elements are sorted according to the return value of the compare function
// when comparing a and b, if we want a to come first we return -1, if we want b to come first we return 1, if both are the same we return 0
//
// players.sort( (a,b) => {
//     if(a.score > b.score){
//         return -1;
//     }else if(a.score < b.score){
//         return 1;
//     }else{
//         return 0;
//     }
// });

// (a,b) => a - b means ascending order
// (a,b) => b - a means descending
players.sort( (a,b) => a.score - b.score )

console.log(players);