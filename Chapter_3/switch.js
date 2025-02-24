console.log("______SWITCH STATEMENTS_____\n");


const grade = '50';

// if(grade === 'F') {

// } else if (grade === 'D'){

// } else if (grade === 'C'){

// } else if (grade === 'B'){
    
// } else if (grade === 'A'){

// }

switch(grade){
    case "A":
        console.log("You got an A");
        break;  //if we dont have this break clause and our grade is A it will run this case and all cases below it as well
    case "B":
        console.log("You got an B");
        break;
    case "C":
        console.log("You got an C");
        break;
    case "D":
        console.log("You got an D");
        break;
    case "F":
        console.log("You got an F");
        break;
    case 50:    // switch cases uses strict comparison therefore this will never happen if the grade is a string
        console.log("You got an F");
        break;
    default:
        console.log("Not a valid grade");
}