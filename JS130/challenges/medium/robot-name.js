/*
Write a program that manages robot factory settings.

When robots come off the factory floor, they have no name.
The first time you boot them up, a random name is generated, such as RX837 or BC811.

Every once in a while, we need to reset a robot to its factory settings, which means that their name gets wiped.
The next time you ask, it will respond with a new random name.

The names must be random; they should not follow a predictable sequence.
Random names means there is a risk of collisions. Your solution should not allow the use of the same name twice.
*/

class Robot {
  static usedNames = [];
  constructor() {
    this.alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.robotName = this.generateRandomName();
    Robot.usedNames.push(this.robotName);
  }

  name() {
    return this.robotName;
  }

  reset() {
    this.robotName = this.generateRandomName();
    Robot.usedNames.push(this.robotName);
  }

  generateRandomName() {
    let name;
    do {
      let idx1 = Math.floor(Math.random() * this.alphabets.length);
      let idx2 = Math.floor(Math.random() * this.alphabets.length)
      name = this.alphabets[idx1] + this.alphabets[idx2] + (Math.floor(Math.random() * 900) + 100);
    } while(Robot.usedNames.includes(name));
    return name;
  }
}

module.exports = Robot;