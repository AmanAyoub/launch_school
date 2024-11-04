/*
Write a program to determine whether a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has exactly two sides of the same length.

A scalene triangle has all sides of different lengths.

Note: For a shape to be a triangle at all, all sides must be of length > 0, 
and the sum of the lengths of any two sides must be greater than the length of the third side.
*/

class Triangle {
  constructor(side1, side2, side3) {
    this.allSides = [side1, side2, side3].sort((a, b) => a - b);
    this._validateSideLengths();
  }

  _isIsosceles() {
    return this.allSides[0] === this.allSides[1] ||
        this.allSides[0] === this.allSides[2] ||
        this.allSides[1] === this.allSides[2];
  }

  kind() {
    if (this.allSides.every(side => this.allSides[0] === side)) {
      return "equilateral";
    } else if (this._isIsosceles()) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }

  _validateSideLengths() {
    let greatestSide = this.allSides[this.allSides.length - 1];
    let twoSideSum = this.allSides[0] + this.allSides[1];
  
    if (this.allSides.some(side => side <= 0) || twoSideSum <= greatestSide) {
      throw new Error("invalid input");
    }
  }
}

module.exports = Triangle;