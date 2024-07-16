/*
The time of day can be represented as the number of minutes before or after midnight.
If the number of minutes is positive, the time is after midnight.
If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of
day in 24 hour format (hh:mm). Your function should work with any integer input.
*/

const MINUTES_PER_HOURS = 60;
const HOURS_PER_DAYS = 24
const MINUTES_PER_DAYS = MINUTES_PER_HOURS * HOURS_PER_DAYS;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(minutes) {
  if (minutes < 0) {
    minutes = (minutes % MINUTES_PER_DAYS) + MINUTES_PER_DAYS;
  } else {
    minutes = minutes % MINUTES_PER_DAYS;
  }

  let hours = Math.floor(minutes / MINUTES_PER_HOURS);
  let min = Math.floor(minutes % MINUTES_PER_HOURS);

  return formatTime(hours, min)
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231)=== "01:29");