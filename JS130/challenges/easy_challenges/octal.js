/*
Implement octal to decimal conversion. Given an octal input string, your program should produce a decimal output.
Treat invalid input as octal 0. The only valid digits in an octal number are 0, 1, 2, 3, 4, 5, 6, and 7.

Note: Implement the conversion yourself.
Don't use any built-in or library methods that perform the necessary conversions for you.
In this exercise, the code necessary to perform the conversion is what we're looking for.

In: string
Out: number
Rules:
 - Can't use built-in methods to convert the octal to a decimal
 - If invalid input (includes 8 or 9), return 0


toDecimal
-----------
1. Create a variable sum assign it to 0
2. If the octal string contains 8, 9, or any other chars
 - Return sum
4. Create a counter assign it to 0
5. Iterate through the octal string from the end
 - 8 power counter, multiply the result by the current number
   - Assign the result to sum
6. Return sum
*/

class Octal {
  static base = 8;
  constructor(octal) {
    this.octal = octal;
  }

  toDecimal() {
    let sum = 0;
    if (this._invalidNum()) {
      return sum;
    }

    for (let idx = this.octal.length - 1; idx >= 0; idx--) {
      sum += this.octal[idx] * (Octal.base ** ((this.octal.length - 1) - idx));
    }
    return sum;
  }

  _invalidNum() {
    return this.octal.match(/[^0-7]/g) !== null;
  }
}

module.exports = Octal;