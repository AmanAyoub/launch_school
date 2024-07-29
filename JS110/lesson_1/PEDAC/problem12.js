/*
Create a function that takes a string argument and returns a copy of the string with every second character in every third word converted to uppercase. Other characters should remain the same.

P:
In: a string
Out: string (not the same string)
Rules:
 - Convert every other letters of third word's to uppercase
  - Other characters should remain as it is
 - If the third word is a signle letter, it should remain as it is
 - If input string contain uppercase characters, it should remain the same

"The sun is no shinning today!" ==> "The sun iS not shinning tOdAy!"

D:
 - Array: to store every word of the input string

A:
High level:
 - Split the input string into an array/list of words, iterate through it
  - If iteration number is a multiplier of 3
   - Conver every other letter of the current word

Detailed:
 1. Create an array `words` containing the words of the input string
 2. Iterate through `words` to transform the array
  - If the iteration number is a multiplier of 3
   - Change every other letter of the word to uppercase
  - Otherwise, move to the next word
 3. Convert the `words` array/list to a string
 4. Return the string


secondLettersToUpper function
--------------------
 1. Create a variable `result` assing it to an empty string
 2. Iterate through given string
  - If the current character index is odd
   - Add the current character to `result` in uppercase form
  - Otherwise, add the current character to `result` as it is
 3. Return `result`
*/

function secondLettersToUpper(string) {
  let result = "";
  for (let idx = 0; idx < string.length; idx++) {
    if (idx % 2 === 1) {
      result += string[idx].toUpperCase();
    } else {
      result += string[idx];
    }
  }

  return result;
}

function toWeirdCase(string) {
  let words = string.split(' ');
  words = words.map((word, idx) => {
    if ((idx + 1) % 3 === 0) return secondLettersToUpper(word);
    return word;
  });

  return words.join(' ');
}


let p = console.log;
let original = 'Lorem Ipsum is simply dummy text of the printing world';
let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
p(toWeirdCase(original) === expected);

original = 'It is a long established fact that a reader will be distracted';
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
p(toWeirdCase(original) === expected);

p(toWeirdCase('aaA bB c') === 'aaA bB c');

original = "Mary Poppins' favorite word is " +
           "supercalifragilisticexpialidocious";
expected = "Mary Poppins' fAvOrItE word is " +
           "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
p(toWeirdCase(original) === expected);