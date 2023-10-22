// Date.getYear() method is used to get the year on a specified date according to universal time. 
// The year we get from the method getYear() is the current year minus 1900.
let date = new Date();

// Returns a value that is subtracted from 1900 to the current year.
let year = date.getYear();
console.log(year); // returns 123

// getFullYear() method returns the year of the specified date according to local time.
// A four-digit number:
let currentYear = date.getFullYear();
console.log(currentYear); // returns 2023
