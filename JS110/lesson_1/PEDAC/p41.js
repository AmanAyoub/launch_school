/*
Your job is to write a function which increments a string to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number, the number 1 should be appended to the new string.
Examples:

foo -> foo1
foobar23 -> foobar24
foo42 -> foo43
foo9 -> foo10
foo99 -> foo100
In: string
Out: string
Rule
 - If the string ends with a number, increment that number by 1
 - If the string doesn't end with a number, append 1

 - Extract the number from the end of the string
 - Increment the number by 1
 - Combine the numbers with the rest of the string

1. If the input string doesn't end wiht a number
  - Append 1 to the end of the string, return it
2. Get the number from the end of the input string
3. Increment the number by 1
4. Combine the rest of the string with the result
5. Return the string

function: lastNumber(string)
------------------------
1. Create an empty string `num`
2. Iterate through the input string from the end
 - If the current char is not a number
  - Return `num`
 - Prepend the current char to `num`
3. Return `num`
*/

function incrementString(string) {
  let lastChar = string[string.length - 1]
  if (!(lastChar >= 0 &&  lastChar <= 9)) {
    return string + "1";
  }

  let lastNum = lastNumber(string);
  let str = string.slice(0, string.length - lastNum.length);
  lastNum = Number(lastNum) + 1;
  return str + lastNum;
}


function lastNumber(string) {
  let num = "";
  for (let index = string.length - 1; index >= 0; index--) {
    if (!(string[index] >= 0 && string[index] <= 9)) {
      return num;
    }
    num = string[index] + num;
  }

  return num;
}


console.log(incrementString("foobar0")); // "foobar1"
console.log(incrementString("foobar999")); // "foobar1000"
console.log(incrementString("foo")); // "foo1"
console.log(incrementString("foobar1")); // "foobar2"
console.log(incrementString("1")); // "2"
console.log(incrementString("9")); // "10"
console.log(incrementString("fo99obar99")); // "fo99obar100"