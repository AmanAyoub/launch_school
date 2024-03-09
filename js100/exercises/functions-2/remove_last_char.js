// Create a function removeLastChar that takes a string as an argument,
// and returns the string without the last character.

function removeLastChar(str) {
  return str.substr(0, str.length - 1);
}

console.log(removeLastChar("Hello world!")); // Hello World
console.log(removeLastChar("Heyy")); // Hey

// On line 5, the substr() method extracts a part of a string.
// The substr() method begins at a specified position,
// and returns a specified number of characters.
// The substr() method does not change the original string.