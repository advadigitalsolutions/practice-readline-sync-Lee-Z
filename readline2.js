const readline = require('readline-sync');

let firstName = readline.question("What is your first name? ");
console.log(`Hello, ${firstName}!`);
let lastName = readline.question("What is your last name? ");
console.log(`Hello, ${firstName} ${lastName}!`);

let num1 = readline.questionInt("Enter a number: ");
let num2 = readline.questionInt("Enter another number: ");
console.log(num1 + num2);

let answer1 = readline.question("What is the output of '5' + 3 in JavaScript? ");
console.log(`You answered: ${answer1}`);
console.log("The correct answer is: '53' because '5' is a string.");

let question2 = readline.question('Is "" true or false? ');
console.log(`You answered: ${question2}`);
console.log("The correct answer is: false because an empty string is a falsy value.");

let question3 = readline.question("What is the output of Boolean('false') in JavaScript? ");
console.log(`You answered: ${question3}`);
console.log("The correct answer is: true because any non-empty string is a truthy value.");

let question4 = readline.question("What is the output of 5 === '5' in JavaScript? ");
console.log(`You answered: ${question4}`);
console.log("The correct answer is: false because the strict equality operator (===) does not perform type coercion.");

let question5 = readline.question("What is the output of 5 == '5' in JavaScript? ");
console.log(`You answered: ${question5}`);
console.log("The correct answer is: true because the loose equality operator (==) performs type coercion.");

// Final message
console.log("Good job! Keep learning and remember to have fun!");