// Write a function that takes one argument, a positive integer,
// and returns a list of the digits in the number.


function digitList(integer) {
  let array = integer.toString().split('').map(str => Number(str));
  return array;
}



console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]