// Write a while loop that logs all odd natural numbers between 1 and 40.

let number = 1;

// The remainder ( % ) operator returns the remainder left over when one operand is divided by a second operand.
while (number <= 40) {
	// If the remainder equals 1, so that means the number is odd, then it will log the number:
	if (number & 1) {
		console.log(number);
	}
	number += 1;
}
// logs:
// 1
// 3
// 5
// 7
// 9
// 11
// 13...
