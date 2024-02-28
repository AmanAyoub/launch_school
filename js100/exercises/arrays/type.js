// The isArray() method returns true if a variable holds an array,
// otherwise false:

let evenNumbers = [2, 3, 4, 6];
let games = 'Football, Cricket, and Basketball';

function filter(input) {
  return Array.isArray(input);
}

console.log(filter(evenNumbers)); // true
console.log(filter(games)); // false


