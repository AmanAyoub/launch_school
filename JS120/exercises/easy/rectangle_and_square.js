// Given the class from the previous problem:

class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

// Write a class called Square that inherits from Rectangle, and is used like this:
let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25
