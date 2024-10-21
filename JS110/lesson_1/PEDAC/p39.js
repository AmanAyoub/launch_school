/*
Given a sentence, write a function that finds the starting index of
the rightmost occurrence of any consecutive vowel sequence in the sentence
and the word it belongs to.
The function should be case-insensitive and should only consider vowel
sequences within individual words (not spanning multiple words).

If a consecutive vowel sequence is found, return an array where the first element is
the starting index of the sequence and the second element is the word containing that sequence.

If no consecutive vowels are found, return an empty array.

In: string
Out: array
Rules:
 - Start searching for consecutive vowels from the right side
 - If no consecuitves found, return an empty array
 - The function should be case-insensitive

"The sun was shiniing last night" ==> [11, "shiniing"]

Array: to store all words from the input array

 - Get the words from the input array
 - Search for the word that contains consecutive vowels

1. Get the all words from the input string
2. Create an empty array resultArray
3. Iterate through words
 - Extract the vowels from the current word
 - If the vowels contain consecuitves
  - Append the current word to resultArray with its index
4. Return resultArray 

function: vowels(string)
--------------------
1. Create an empty string vowelsStr
2. Iterate through the input string
 - If the current char is a vowel
  - Append the the current char to vowelsStr
 - Otherwise, append a space strin to vowelsStr
3. Return vowelsStr
*/

function rightmostConsecutiveVowel(string) {
  let words = string.split(' ');
  let resultArray = [];
  for (let idx = words.length - 1; idx >= 0; idx--) {
    if (vowels(words[idx]).split(' ').some(str => str.length > 1)) {
      let consec = vowels(words[idx]).split(' ').find(str => str.length > 1);
      consec = consec.slice(consec.length - 2);

      resultArray.push(string.lastIndexOf(consec), words[idx]);
      return resultArray;
    }
  }

  return resultArray;
}

function vowels(string) {
  let vowelsStr = "";
  for (let char of string) {
    if ("aeiouAEOIU".includes(char)) {
      vowelsStr += char;
    } else {
      vowelsStr += " ";
    }
  }

  return vowelsStr;
}

console.log(rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")); // Output: [37, "laaazy"]
console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: [29, "sea"]
console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: [15, "aaapples"]
console.log(rightmostConsecutiveVowel("This sentence has no consecutive vowels")); // Output: []
console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: [23, "cooool"]