// Implement a function, capitalize, that capitalizes all words in a sentences.
// However, only capitalize if the word is followed by a word starting with a vowel. -- Aman
/*
P
 IN: A string that contains sentence
 OUT: A string calitalized words followed by words starting with a vowel

D
 String: to save the capitalized sentence
 Array: to find words followed by words starting with a vowel

A
Given a string, write a function `capitalize`
 - Declare a variable `capitalizedWords`, initialize it to an empty string
 - Declare a variable `words`, initialize it to the given string splitted as array elements

 - Iterate through `words` find each word that is followed by word starting with a vowel
  - Declare a variable `nextWord`, initilaize it to the next element in the iteration
  - Declare a variable `currentWord`, initialize it to the current element in the iteration
  - Check whether `nextWord` starts with a vowel
   - if true:
    - concatenate the `currentWord` capitalized to the `capitalizedWords`
   - if false:
    - move to the next word
  - End of the loop

 - Repeat step #3 for each element in the `words`
 - Return `capitalizedWords`
*/

function capitalize(string) {
  let capitalizedWords = "";
  let words = string.split(" ");

  for (let index = 0; index < words.length; index++) {
    let currentWord = words[index];
    let nextWord = words[index + 1];

    if (nextWord && "aeiou".includes(nextWord[0])) {
      capitalizedWords += currentWord[0].toUpperCase() + currentWord.slice(1) + " ";
    } else {
      capitalizedWords += currentWord + " ";
    }
  }

  return capitalizedWords;
}


// Test cases
console.log(capitalize("hello apple world")); // "Hello apple world"
console.log(capitalize("this is an umbrella")); // "This Is An umbrella"
console.log(capitalize("every vowel starts an echo")); // "every vowel Starts An echo"
console.log(capitalize("under the oak tree")); // "under The oak tree"
console.log(capitalize("a quick brown fox")); // "a quick brown fox"