// Using the code from the previous exercise, 
// add a parameter to constructor that provides a name for the Cat object.
// Assign this parameter to a property called name and use it to log a greeting with the provided name.
// (You can remove the code that displays I'm a cat!.)

class Cat {
  constructor(name) {
    this.name = name;
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat('Sophie');

// Expected output:
// Hello! My name is Sophie!