// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array
// that contains the product of each pair of numbers from the arguments that have the same index.
// You may assume that the arguments contain the same number of elements.

function multiplyList(arr1, arr2) {
  return arr1.reduce((acc, _, index) => {
    acc.push((arr1[index] * arr2[index]));
    return acc;
    }, []);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]