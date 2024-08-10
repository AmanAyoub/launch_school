/*
Create a function that takes two integers as arguments.
The first argument is a count, and the second is the starting number of a sequence
that your function will create. The function should return an array containing
the same number of elements as the count argument.
The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0.
The starting number can be any integer. If the count is 0, the function should return an empty array.
*/


function sequence(count, target) {
  let numbersUpToTarget = [];

  if (target === 0) {
    while (numbersUpToTarget.length < count) {
      numbersUpToTarget.push(target);
    }
  }
  
  for(let index = 1; numbersUpToTarget.length < count; index++) {
    if (target < 0) {
      if (-index % target === 0) {
        numbersUpToTarget.push(-index);
      }
    } else {
      if (index % target === 0) {
        numbersUpToTarget.push(index);
    }
    }
  }

  return numbersUpToTarget;
}


// Second approch:
function sequence(count, startingInt) {
  return Array(count).fill(startingInt).map((_, i) => startingInt * (i + 1));
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []