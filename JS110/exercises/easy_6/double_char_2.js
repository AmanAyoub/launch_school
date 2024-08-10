/*
Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

In: string
Out: string
Rules:
 - Do not double vowels, digits, punctuation, or whitespace
 - Double consonant characters

D:
 - Array: to store the characters

A:
1. Convert the input string to an array of characters
2. Iterate through characters
 - If the current character is a consonant
  - Double it
3. Convert the array to a string, return it
*/

function doubleConsonants(string) {
  let characters = string.split('');
  let doubledConsonants = characters.map((char) => {
    if (char.match(/[^aeiou0-9_\W]/gi)) return char + char;
    return char;
  });

  return doubledConsonants.join('');
}



console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""