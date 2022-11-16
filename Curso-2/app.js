// Object, it's created with keys 
// {
//     "username": 'Ryan',
//     "score": 70.4,
//     "hours": 340,
//     "professional": true
// }

// {
//     "username": 'Santi',
//     "score": 20.4,
//     "hours": 30,
//     "professional": false
// }

console.log('Hello')

const alex = 'Hello'

console.log({
    alex: 'Santi',
    "hours1": 20.4,
    "hours": 30,
    "professional": false
});

// Constant 
const PI = 3.1415;
console.log(PI);

let numberOne = 10;
let numberTwo = 100;
let result = numberOne + numberTwo;
console.log(result);

// Comparaision 
let resultOne = numberOne > numberTwo;
console.log(resultOne);
let resultTwo = numberOne <= numberTwo;
console.log(resultTwo);
let resultThree = numberOne == numberTwo;
console.log(resultThree);

// Conditional operators 
if (resultTwo == true){ 
    console.log('Login successful')
} else {
    console.log('Error in Login')
}

// We can specify === or ==, check when use one or another 

let score = 70;
// Statement 1 and 2 will be printed. We are doing if stantement first and then a if else
if (score > 30) {
    console.log('You need improvement')
} 
if (score > 15){
    console.log('You are getting better')
} else {
    console.log('Follow this tutorial')
}

console.log('Second conditional')
if (score > 30) {
    console.log('You need improvement')
} else if (score > 15){
    console.log('You are getting better')
} else {
    console.log('Follow this tutorial')
}


let typeCard = 'Credit Card';

switch(typeCard){
    case 'Debid Card':
        console.log('This is a Debid Card');
        break;
    case 'Credit Card':
        console.log('This is a Credit Card');
        break;
    default:
        console.log('No Card')
}

let count = 10;

while(count > 0){
    console.log('Hello world');
    count -= 1;
}
// Once we have asigned one variable type, defined a variable we do not have to declare it again
count = 10;
while(count > 0){
    console.log(count);
    count --;
}

count = 0;
while(count < 10){
    console.log(count);
    count ++;
}