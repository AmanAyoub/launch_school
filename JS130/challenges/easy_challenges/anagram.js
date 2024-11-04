/*
Write a program that takes a word and a list of possible anagrams and selects the correct sublist that contains the anagrams of the word.

For example, given the word "listen" and a list of candidates like "enlists", "google", "inlets", and "banana",
the program should return a list containing "inlets". Please read the test suite for the exact rules of anagrams.

In: string (a word), array (possible anagrams)
Out: array (anagrams)
Rules:
 - Start looking for anagrams from the end of the array
 - If no anagrams found, return an empty array
 - Anagrams case doesn't matter

Anagram.match:
1. Create an empty array anagrams
2. Iterate through the array starting from the end
 - If the current word is an anagram
  - Append it to anagrams
3. Return anagrams

function: isAnagram(str1, str2)
--------------
1. Convert the both strings to lowercase
2. Convert the both strings to an arrays of characters
3. Sort the arrays
4. Convert the arrays to strings
5. If the result strings are equal, return true
6. Otherwise, return false
*/

class Anagram {
  constructor(string) {
    this.word = string;
  }

  match(strings) {
    let anagrams = [];
    for (let idx = strings.length - 1; idx >= 0; idx--) {
      if (this._isAnagram(strings[idx])) {
        anagrams.push(strings[idx]);
      }
    }
    return anagrams;
  }

  _isAnagram(string) {
    let str1 = this.word.toLowerCase();
    let str2 = string.toLowerCase();
    if (str1 === str2) return false;
    return str1.split('').sort().join('') === str2.split('').sort().join('');;
  }
}

module.exports = Anagram;