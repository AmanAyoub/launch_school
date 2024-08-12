/*
Implement a function, capitalize, that capitalizes all words in a sentences.
However, only capitalize if the word is followed by a word starting with a vowel. -- Aman

In: string
Out: string
Rules:
 - Capitalize words that followed by words starting with a vowel

Array: to store the words

A:
 - Get the words of input string
 - Iterate through words
  - If the current word is followed by a word starting with vowel
  - Capitalize the current word

1. Get the words from the input string
2. Iterate through words
 - If the next word is starting with a vowel
  - Capitalize the current word
3. Convert the words array/list to a string
4. Return the string


capitalize(string) function
-----------------
1. Get the input string first char
2. Change the char to uppercase
3. Join the char with the rest of chars
4. Return the joined string
*/

function capitalize(string) {
  let words = string.split(" ");
  for (let idx = 0; idx < words.length - 1; idx++) {
    let nextWord = words[idx + 1];
    if ("aeiou".includes(nextWord[0])) {
      words[idx] = capitalizeWord(words[idx]);
    }
  }

  return words.join(' ');
}


function capitalizeWord(string) {
  return string[0].toUpperCase() + string.slice(1);
}


// Test cases
console.log(capitalize("hello apple world")); // "Hello apple world"
console.log(capitalize("this is an umbrella")); // "This Is An umbrella"
console.log(capitalize("every vowel starts an echo")); // "every vowel Starts An echo"
console.log(capitalize("under the oak tree")); // "under The oak tree"
console.log(capitalize("a quick brown fox")); // "a quick brown fox"