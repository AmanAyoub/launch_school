// Change the following code so that creating a new Truck automatically invokes startEngine.

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    this.startEngine();
  }
  startEngine() {
    console.log('Ready to go!')
  }
}

let truck = new Truck(2003);
console.log(truck.year); // 2003
// Expected output:
// Ready to go!
// 2003
