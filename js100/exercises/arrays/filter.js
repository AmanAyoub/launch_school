// The filter() method creates a new array filled
// with elements that pass a test provided by a function.
// The filter() method does not change the original array:
let scores = [96, 47, 113, 89, 100, 102];

let highScores = scores.filter(score => score >= 100);
console.log(highScores.length); // 3
