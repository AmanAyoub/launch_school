/*
Create a function that takes a string argument and returns a copy of the string with
every second character in every third word converted to uppercase.
Other characters should remain the same.

IN: string
Out: string
Rules:
 - Convert every third word second char to uppercase

Array: to store the words from input string

A:
 - Get the words of input string
 - Iterate through words
 - Convert each third word's second char to uppercase

1. Get the words from input string
2. Iterate through words
 - If the current iteration number is a multiple of three
  - Convert the current word second char to uppercase
3. Convert the words to a string
4. Return the string

secondToUpper(string) function
----------------------
1. If the input string is a single char, return it as it iS
2. Change the second char of input string to upper case
3. Return the string
*/

function toWeirdCase(string) {
  let words = string.split(' ');
  words = words.map((word, idx) => {
    if ((idx + 1) % 3 === 0) return secondToUpper(word);
    return word;
  });

  return words.join(' ');
}

function secondToUpper(string) {
  if (string.length === 1) return string;
  let chars = string.split('');
  chars.forEach((char, idx) => {
    if (idx % 2 === 1) chars[idx] = char.toUpperCase();
  })
  return chars.join('');
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