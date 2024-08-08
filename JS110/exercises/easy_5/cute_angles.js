/*
Write a function that takes a floating point number representing an angle between 0
and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds.
You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes,
and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

In: number
Out: string
 - A degree is 60 minutes
 - A minutes is 60 seconds

A:
 - Get the degrees by dividing input number by 60
 - Get the minutes by dividing the remainder by 60
 - Use the remainder as the seconds

1. Create a variable degrees assign it to the degrees
 - Divide the input number by 60 to get the degrees
2. Create a variable minutes assign it to the minutes
 - Divide the remainder by 60 to get the minutes
3. Create a variable seconds assign it to the seconds
4. Return the degrees in its format
*/


function dms(num) {
  let degrees = Math.floor(num);
  let minutes = Math.floor((num - degrees) * 60);
  let seconds = Math.floor((((num - degrees) * 60) - minutes) * 60);
  
  return `${degrees}°${String(minutes).padStart(2, "0")}'${String(seconds).padStart(2, '0')}"`;
}




console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"