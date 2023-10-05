// The parseInt() function parses a string and returns an integer, NaN otherwise.

let string = '15.23'
console.log(parseInt(string)); // returns 15
console.log(parseInt(string) + 5); // returns 20

string = '12.16cm'
console.log(parseInt(string)); // returns 12

string = 'baki'
console.log(parseInt(string)); // returns NaN
