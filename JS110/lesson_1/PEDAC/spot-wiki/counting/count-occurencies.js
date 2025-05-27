/*
Create a function that takes a string as an argument and return an object with
letters of the string and their occurrence as properties:

eg: {a:2, b: 3}

In: string
Out: object containing the characters occurrence within input string
Rules:
 - Output object should contain the characters in order or appearns
 - Count the frequency of characters within input string
 - Each property value within the output object should an integer

 - Iterate through each character in the input string
 - Count occurrencies of each character

- Create an empty object frequency
- Iterate through the input string
 - If the current character doesn't exist within frequency as a property
  - Create a property wihtin frequency using the character with value of 1
 - Otherwis, increment the property value associated with current character within frequency
- Return frequency
*/

function countOccurencies(string) {
  let frequency = {};
  for (let char of string) {
    if (!(frequency.hasOwnProperty(char))) {
      frequency[char] = 1;
    } else {
      frequency[char] += 1;
    }
  }

  return frequency;
}

countOccurencies('abbab'); // => {a:2, b: 3}

/*
Explore more:
Create a function that takes the object that your function returned as an argument
and returns a string in with all the letters that appears in the object, in alphabetical
order appearing as many times as the value states. Order doesn't matter. For example:
{a:1, k:3, g:2} => 'aggkkk'

In: object
Out: string
Rules:
 - Output string should be ordered in alphabetical order
 - Input object characters/properties order doesn't matter
 - Output string should contain each character as many times as the value states within input object


- Iterate through each character in the object
- Copy the character as many times stated wihtin the value

- Create an empty string resultStr
- Iterate through the input object
 - Repeat the current key as many times as stated by the value
 - Append the repeated string to resultStr
- Order the resultStr by alphabetical order
- Return the ordered string

function: orderString(string)
--------------
- Convert the input string into an array of characters
- Order the array by alphabetical order
- Convert the array back to a string
- Return the string
*/

function convertToString(frequency) {
  let resultStr = '';
  for (let key in frequency) {
    resultStr += key.repeat(frequency[key]);
  }

  return orderString(resultStr);
}

function orderString(string) {
  return string.split('').sort().join('');
}

console.log(convertToString({a:1, k:3, g:2})); // 