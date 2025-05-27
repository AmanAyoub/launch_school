/*
Create a function that takes two strings as an argument and returns a number representing occurrences
of the second argument as a sub-string of the first argument.

In: two strings
Out: number
Rules:
 - Second input string should be checked within the first string as a substring
 - Count how many times second string occurs in the first

- Create a counter with an inital value of 0
- While the first input string contains the second input string
 - Remove the first occurrence of second input string within/from the first 
 - Increment counter by 1
- Return the counter
*/

function countSubstr(firstStr, secondStr) {
  let counter = 0;
  while (firstStr.includes(secondStr)) {
    firstStr = firstStr.replace(secondStr, '');
    counter += 1;
  }

  return counter;
}

console.log(countSubstr('Hello, Hello! How are you doing Mellody?', 'ello')); // => 3