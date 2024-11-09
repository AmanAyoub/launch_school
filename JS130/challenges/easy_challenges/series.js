
/*
Write a program that will take a string of digits and return all the possible consecutive number series of a specified length in that string.

For example, the string "01234" has the following 3-digit series:
012
123
234

Likewise, here are the 4-digit series:
0123
1234
Finally, if you ask for a 6-digit series from a 5-digit string, you should throw an error.

In: number
Out: array
Rules:
 - If the asked digit series is larger than the original digits string, throw error


slices
---------
1. Create an empty array series
2. Iterate through the string
 - Get the substring starting from the current char upto the input number
  - Append the substring to series
3. Tranform the series array/list to nested array of characters
4. Transform the nested arrays elements to numbers inside series
5. Return series
*/

class Series {
  constructor(strNumber) {
    this.strNumber = strNumber;
  }

  slices(numberOfDigits) {
    this._validateLength(numberOfDigits);

    let series = [];
    for (let idx = 0; idx <= this.strNumber.length - numberOfDigits; idx++) {
      series.push(this.strNumber.slice(idx, idx + numberOfDigits));
    }

    return series.map(str => str.split('').map(Number));
  }

  _validateLength(length) {
    if (length > this.strNumber.length) {
      throw new Error("Series must be less than the string length");
    }
  }
}

module.exports = Series;