/*
Cute Angles

Write a function that takes a floating point number representing an angle between 0
and 360 degrees and returns a string representing that angle in degrees, minutes,
and seconds. You should use a degree symbol (˚) to represent degrees, a single
quote (') to represent minutes, and a double quote (") to represent seconds. 

There are 60 minutes in a degree, and 60 seconds in a minute.

input:
- integer

output:
- string

rules:
- input is a floating point number that represents an angel between 0-360
- returned string represents the angle in degrees, minutes, and seconds // 30˚15'20"
- use degree symbol ˚, single quote ' for minutes and double quote " for seconds
- there are 60 minutes in a degree, and 60 seconds in a minute.

algo: 
1. Get the integer value from the input number, store it as degrees
2. Get the decimal value from the input number, multiply by 60
 - Store the result as minutes
3. Get the decimal value of minutes, multiply it by 60
 - Store the result as seconds
4. Format the degrees, minutes, and seconds, return it


function: prependZero(string)
----------------
1. If the input string length is 1
 - Prepend "0" to the input string, return it
2. Otherwise, return the input string


function: getDecimals(number)
-------------
0. If the input is an integer, return 0
1. Convert the input number to a string
2. Slice the string starting from the "." until the end
3. Prepend "0" to the string, convert it to a number
4. Return the number

1. Get the integer value from the input number, store it as degrees
2. Get the decimal value from the input number, multiply by 60
 - Store the result as minutes
3. Get the decimal value of minutes, multiply it by 60
 - Store the result as seconds
4. Format the degrees, minutes, and seconds, return it
*/


const dms = (number) => {
  let max = 360;

  if (number > 0) {
    number = number % 360;
  } else if (number < 0) {
    number = (number % 360) + 360;
  }

  let degrees = parseInt(number);
  let minutes = (number - degrees) * 60;
  let seconds = getDecimals(minutes) * 60;

  console.log(`${parseInt(degrees)}˚${prependZero(String(parseInt(minutes)))}'${prependZero(String(parseInt(seconds)))}"`);
}


const prependZero = (string) => {
  return string.length === 1 ? "0" + string : string;
}

const getDecimals = (number) => {
  if (number === parseInt(number)) {
    return 0;
  }
  let stringNum = String(number); // 55
  let decimals = "0" + stringNum.slice(stringNum.indexOf("."));
  let convertToNum = Number(decimals);
  return convertToNum;
}


// 400 % 360 -> 40
dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"