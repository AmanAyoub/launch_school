/*
Some people believe that Fridays that fall on the 13th day of the month are unlucky days. Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.
*/

function fridayThe13ths(year) {
  let thirteenths = [];

  for (let month = 0; month < 12; month += 1) {
    if (new Date(year, month, 13).getDay() === 5) {
      thirteenths.push(new Date(year, month, 13));
    }
  }

  return thirteenths.length;
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2