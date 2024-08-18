//Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

function alphabeticNumberSort(integers) {
  let sortedNums = [
    8, 18, 11, 15,  5, 4, 14,
    9, 19,  1,  7, 17, 6, 16,
   10, 13,  3, 12,  2, 0
 ];

 let result = [];
 for (let num of sortedNums) {
  if (integers.includes(num)){
    result.push(num);
  }
 }

  return result;
}

console.log(alphabeticNumberSort([8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]));
console.log(alphabeticNumberSort([3, 9, 8, 12, 0, 19, 7, 15]));