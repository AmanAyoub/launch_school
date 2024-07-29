/*
Create a function that takes a string argument and returns a hash in which the keys represent the lowercase letters in the string, and the values represent how often the corresponding letter occurs in the string.


P:
In: a string
Out: an object containing the frequency of the lowercase letters
Rules:
 - Count only lowercase letters
 - Uppercase letters and other characters are ignored
 - If not lowercase letters found, or input string is empty, return an empty object

"The sun is shinning today!" ==> {h: 1, e: 1, s: 3, u: 1, n: 4, i: 3, g: 1, t: 1...}

D:
 - Object: to store the frequency of the lowercase letters

A:
High level:
 - Iterate over the input string
  - If the current char is lowercase
   - Add the current char as a key and value should be the occurrence number of the char

Detailed:
 1. Create an empty object `frequency` to store the lowercase chars frequency
 2. Iterate through the input string
  - If the input is b/w a and z in lowercase letters
   - If the current char doesn't exist as a key inside the `frequency` object
    - Use the current char as a key and value 0, add it to `frequency`
   - Increment the current character's associated value by 1 inside the `frequency`
 3. Return the `frequency` object
*/

function countLetters(string) {
  let frequency = {};
  for (let char of string) {
    if (char >= "a" && char <= "z") {
      if (! frequency.hasOwnProperty(char)) frequency[char] = 0;
      frequency[char] += 1;
    }
  }

  return frequency;
}

const p = console.log;
const objeq = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (! keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

let expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};
p(objeq(countLetters('woebegone'), expected));

expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
            'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2};
p(objeq(countLetters('lowercase/uppercase'), expected));

expected = {'u': 1, 'o': 1, 'i': 1, 's': 1};
p(objeq(countLetters('W. E. B. Du Bois'), expected));

p(objeq(countLetters('x'), {'x': 1}));
p(objeq(countLetters(''), {}));
p(objeq(countLetters('!!!'), {}));
