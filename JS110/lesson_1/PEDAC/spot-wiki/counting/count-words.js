/*
Create a function that takes a string a s an argument and returns a number of words in that string

In: string
Out: number
Rules:
 - Count words within input string

Array: to store each word from the input string


- Convert the input string into an array of words (separated by spaces)
- Return the length of the words array
*/

function countWords(string) {
  return string.split(' ').length;
}
console.log(countWords('hello world')); // => 2


/*
Explore more:

Create a function that takes a string as an argument and returns an object
containing all of the words from the string and count occurrences of that word.

In: string
Out: object
Rules:
 - Count each word occurrence
 - Words case doesn't matter: HEY and hey are the same
 - Output string should contain the words in lowercase
 - Ignore non-alpha characters within the input string

Array: to store each word from the input string


- Create an empty object frequency
- Filter the input string to only alphabets and spaces
- Convert the filtered string into lowercase letters
- Convert the lowercased string into an array of words
- Iterate through the words array
 - If the current word doesn't exist as a property inside frequency
  - Create a property within frequency with the current word with a value of 1
 - Otherwise, increment the value associated with current word within frequency
- Return frequency

function: removeNonalpha(string)
----------
- Create an empty string alphabets
- Iterate through the input string
 - If the current character is either an alphabet or a space
  - Append the current character to alphabets
- Return alphabets
*/

function removeNonAlpha(string) {
  let alphabets = '';
  for (let char of string) {
    if (/[a-z A-Z]/.test(char)) {
      alphabets += char;
    }
  }

  return alphabets;
}

function countWords2(string) {
  let frequency = {};
  string = removeNonAlpha(string).toLowerCase();
  string.split(' ').forEach(word => {
    if (!frequency.hasOwnProperty(word)) {
      frequency[word] = 1;
    } else {
      frequency[word] += 1;
    }
  });

  return frequency;
}

console.log(countWords2('Hello, hello wolrd')); // => {'hello' : 2, 'world' : 1};