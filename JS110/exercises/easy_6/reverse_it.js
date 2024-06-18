// Write a function that takes a string argument and returns a new string containing
// the words from the string argument in reverse order.

let reverseSentence = (string) => string.split(' ').reverse().join(" ");

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"