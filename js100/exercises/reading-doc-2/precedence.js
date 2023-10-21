console.log(4 * 5 + 3 ** 2 / 10);
// The ** operator has the highest precedence, so it's grouped first.
// Which returns 4 * 5 + 9 / 10

console.log(4 * 5 + 9 / 10);
// Now the * operator has the highest precedence, so it executes first.
// Which returns 20 + 9 / 10

console.log(20 + 9 / 10);
// Now it's the time of / operator, so it executes before the + operator.
// Which returns 20 + 0.9

// Finally, time to do some addition:
console.log(20 + 0.9); // returns 20.9

// That's it!!!
