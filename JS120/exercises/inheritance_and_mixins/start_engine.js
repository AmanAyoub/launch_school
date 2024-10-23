// Given the following code, modify the Truck class so that the code shown below displays the indicated output.
// Your code should make use of the startEngine method in the Vehicle class.


class Vehicle {
  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle {
  startEngine(speed) {
    return `${super.startEngine()} Drive ${speed}, please!`;
  }
}

let truck1 = new Truck();
console.log(truck1.startEngine('fast'));

let truck2 = new Truck();
console.log(truck2.startEngine('slow'));

// Expected output:
// Ready to go! Drive fast, please!
// Ready to go! Drive slow, please!
