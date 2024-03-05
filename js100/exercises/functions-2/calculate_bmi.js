function calculateBMI(height, weight) {
  let heightInMeters = height / 100;
  let BMI = weight / (heightInMeters ** 2);
  return BMI.toFixed(2);
}
console.log(calculateBMI(180, 80)); // Output: 24.69
console.log(calculateBMI(188, 75)); // Output: 21.22

// On line 4, The toFixed() method converts a number to a string.
// The toFixed() method rounds the string to a specified number of decimals