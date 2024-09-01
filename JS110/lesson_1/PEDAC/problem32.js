/*
Write a function, snakecase, that transforms each word in a sentence to alternate
between lower (even index value) and upper (odd index value) cases when the word
before or after it begins with "s".

In: string
Out: string
Rules:
 - If the word begins with s, convert it's both sides words to:
  - Each other word to uppercase letters
 - If no word found starting with a "s", return the string as it is

Array: to store all words of input string

 - Iterate through input string words
 - If a word starts with "s"
 - Convert the word's both sides words character cases

1. Store the input string words as array elements
2. Iterate through words
 - If the current word starts with "s"
  - Convert every other char of both side words of the current word
4. Convert words array/list to string, return it
*/

function toUpper(string) {
  let result = "";
  string.split('').forEach((char, idx) => {
    if ((idx % 2) === 1) {
      result += string[idx].toUpperCase();
    } else {
      result += string[idx].toLowerCase();
    }
  });

  return result;
}


function snakecase(string) {
  let words = string.split(' ');
  words.forEach((word, idx) => {
    if (word[0].toLowerCase() === 's') {
      if (words[idx - 1]) {
        words[idx - 1] = toUpper(words[idx - 1]);
      }
      if (words[idx - 2]) {
        words[idx - 2] = toUpper(words[idx - 2]);
      }
    }
  });

  return words.join(' ');
}

console.log(snakecase("Snakes slither silently")); // "sNaKeS sLiThEr sIlEnTlY"
console.log(snakecase("simple sentence structure")); // "sImPlE sEnTeNcE sTrUcTuRe"
console.log(snakecase("apples are sweet")); // "apples aRe sweet"
console.log(snakecase("swiftly swimming swans")); // "sWiFtLy sWiMmInG sWaNs"
console.log(snakecase("the sun sets slowly")); // "tHe sUn sEtS sLoWlY"
console.log(snakecase("A quick brown fox")); // "A quick brown fox"