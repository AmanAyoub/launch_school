/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

P:
In: number
Out number
Rules:
 - Featured numbers are multiples of 7 with each digit occuring only once
 - If no featured number found, issue an error message


A:
Detailed:
1. Iterate through numbers greater than input number
 - If current number is larger than the highest possible featured num, issue an error
 - If current number is a featured number, return it

isFeatureNum(number) function
---------------------
1. If the input number is not a multiple of 7, return false
2. Get the frequency of each digit
3. If at least one character's frequency is greater than 1, return false
4. Otherwise, return true
*/

function getFrequency(string) {
  let frequency = {};
  for (let char of string) {
    if (! frequency.hasOwnProperty(char)) frequency[char] = 0;
    frequency[char] += 1;
  }

  return frequency;
}

function isFeaturedNum(number) {
  if ((number % 7) !== 0 || (number % 2) === 0) return false;
  let frequency = getFrequency(String(number));
  for (let num of Object.values(frequency)) {
    if (num > 1) return false;
  }
  return true;
}


function featured(number) {
  const LARGEST_FEARTURED_NUM = 9876543201;
  while (true) {
    number += 1;
    if (number > LARGEST_FEARTURED_NUM) {
      return "There is no possible number that fulfills those requirements.";
    }
    if (isFeaturedNum(number)) return number;
  }
}

let p = console.log;
p(featured(12));           // 21
p(featured(20));           // 21
p(featured(21));           // 35
p(featured(997));          // 1029
p(featured(1029));         // 1043
p(featured(999999));       // 1023547
p(featured(999999987));    // 1023456987
p(featured(9876543186));   // 9876543201
p(featured(9876543200));   // 9876543201
p(featured(9876543201));   // "There is no possible number that fulfills those requirements."