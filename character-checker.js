const readlineSync = require('readline-sync');

// prompts the user for a word
let word = readlineSync.question('Please enter a word: ');

// prompt user for an index number
let index = readlineSync.question('Please enter an index number: ');

// prints the character at that index number
console.log(word.charAt(index));