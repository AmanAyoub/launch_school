/*
You'll be given a string of random characters (numbers, letters, and symbols).
To decode this string into the key we're searching for:
(1) count the number of occurences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the number of 
    occurences for each corresponding letter in the alphabet.

The string returned should always be 26 characters long, and only count lowercase letters.
You can assume that each lowercase letter will appear a maximum of 9 times in the input str.

In: string
Out: string
Rules:
 - Count only lowercase letters
 - Returned string should be of 26 length

 - Object: to store the frequency of the lowercase letters
 - Array: to store the lowercase letters
 - Array: to store the frequency of letters
 - Object: to store the initial occurences of letters

A:
 - Extract the lowercase letters from input string
 - Get the frequency of the lowercase letters
 - Increase each letter's corresponding value by its occurence
 - Return the frequency values as strings

1. Get the lowercase letters from input string
2. Get the frequency of the lowercase letters as an Object
3. Create an object result, containing the initial occurences of the lowercase letters from a-z
4. Iterate through frequency obj
 - Increase the value of current key inside result by the value of frequency key's value
5. Convert the result's values to string
6. Return the string


getFrequency(string) function
------------------------------
1. Create an empty object frequency
2. Iterate through input string
 - If the current char doesn't exist as a key inside frequency
  - Use the current char and value 0, add it to frequency object
 - Increase the the current key associated value by 1, inside frequency
3. Return frequency
*/
function decrypt(string) {
  if (string.match(/[a-z]/g) === null) return Array(26).fill(0).join('');
  let lowercaseLetters = string.match(/[a-z]/g).join('');
  let frequency = getFrequency(lowercaseLetters);
  let result = {}
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    result[char] = 0;
  }

  for (let key in frequency) {
    result[key] = frequency[key];
  }

  return Object.values(result).join('');
}


function getFrequency(string) {
  let frequency = {};
  for (let char of string) {
    if (! frequency.hasOwnProperty(char)) frequency[char] = 0;
    frequency[char] += 1;
  }

  return frequency;
}
console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');
console.log(decrypt('a1b2c3D4dda') === '21120000000000000000000000');
console.log(decrypt('a1aba2aca3aDaa4dda') === '91120000000000000000000000');
console.log(decrypt('1203904942@$2') === '00000000000000000000000000');
console.log(decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000');
console.log(decrypt('') === '00000000000000000000000000');