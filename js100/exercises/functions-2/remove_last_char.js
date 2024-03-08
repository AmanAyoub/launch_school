// Create a function removeLastChar that takes a string as an argument,
// and returns the string without the last character.

function removeLastChar(str) {
  return str.slice(0, str.length-1);
}

console.log(removeLastChar("Hello world!")); // Hello World
console.log(removeLastChar("Heyy")); // Hey