// The Cat constructor should take 3 arguments, name, age and status.
// Cats should always have a leg count of 4 and a species of cat.
// Also, the introduce method should be identical to the original except, after the phrase there should be a single space and the words Meow meow!.


// The Dog constructor should take 4 arguments, name, age and status and master.
// Dogs should always have a leg count of 4 and a species of dog.
// Dogs have the same introduce method as any other animal, but they have their own method called greetMaster(),
// which accepts no arguments and returns Hello (master's name)! Woof, woof!.
// (Make sure you replace (master's name) with the name of the dog's master.)

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return super.introduce() + " Meow meow!";
  }
}

let cat = new Cat("Pepe", 2, "happy");
console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// logs true