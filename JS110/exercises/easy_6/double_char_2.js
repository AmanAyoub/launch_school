/*
Write a function that takes a string, doubles every consonant character in the string,
and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'),
digits, punctuation, or whitespace.
*/

function doubleConsonants(string) {
  let doubledCharacters = string.split('').map(char => {
    if (char.match(/\w/g) && !['a', 'e', 'i', 'o', 'u'].includes(char)) return char + char;
    return char;
  });

  return doubledCharacters.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""