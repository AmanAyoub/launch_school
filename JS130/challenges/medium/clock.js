/*
Create a clock that is independent of date.

You should be able to add minutes to and subtract minutes from the time represented by a given Clock object.
Note that you should not mutate Clock objects when adding and subtracting minutes -- create a new Clock object.

Two clock objects that represent the same time should be equal to each other.

You may not use any built-in date or time functionality; just use arithmetic operations.
*/


class Clock {
  static at(hours, minutes) {
    return new Clock(hours, minutes);
  }

  static HOURS_PER_DAY = 24;
  static MINUTES_PER_HOUR = 60;
  constructor(hours = 0, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.time = null;
  }

  hoursAndMinutes(minutes) {
    let hours = Math.floor(minutes / Clock.MINUTES_PER_HOUR % Clock.HOURS_PER_DAY);
    let min = Math.floor(minutes % Clock.MINUTES_PER_HOUR);
    return [hours, min];
  }

  add(minutes = 0) {
    let [hour, min] = this.hoursAndMinutes(minutes);
    hour = (this.hours + hour) % Clock.HOURS_PER_DAY;
    min = (this.minutes + min) % Clock.MINUTES_PER_HOUR;

    return new Clock(hour, min);
  }

  subtract(minutes) {
    let totalMins = (this.hours * Clock.MINUTES_PER_HOUR + this.minutes) - minutes ;
    while(totalMins < 0) {
      totalMins += Clock.MINUTES_PER_HOUR * Clock.HOURS_PER_DAY;
    }
    let time = this.hoursAndMinutes(totalMins);
    return new Clock(...time);
  }

  isEqual(clock) {
    return this.toString() === clock.toString();
  }

  toString() {
    return `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}`;
  }
}

module.exports = Clock;