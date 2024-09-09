// Using the following code, add two methods:
// static method genericGreeting and instance method personalGreeting.
// The first method should log a greeting that's generic to the class.
// The second method should be an instance method and log a greeting that's custom to the object.


class Cat {
  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }
  constructor(name) {
    this.name = name;
  }

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}`);
  }
}

let kitty = new Cat("Sophie");
Cat.genericGreeting();
kitty.personalGreeting();

// Expected output:
// Hello! I'm a cat!
// Hello! My name is Sophie!