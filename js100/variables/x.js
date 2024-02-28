const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

while (true) {
  prompt('Enter your first number:');
  let number1 = Number(readline.question());
  while (invalidNumber(number1)) {
    number1 = Number(readline.question());
  }

  prompt('Enter second number:');
  let number2 = Number(readline.question());
  while (invalidNumber(number2)) {
    number2 = Number(readline.question());
  }

  prompt('What operation would you like:\n1. Addition 2. Subtraction 3. Multiplication 4. Division');
  let operation = Number(readline.question());

  let result;
  if (operation === 1) {
    result = number1 + number2;
  } else if (operation === 2) {
    result = number1 - number2;
  } else if (operation === 3) {
    result = number1 * number2;
  } else if (operation === 4) {
    result = number1 / number2;
  } else {
    result = 'Please enter a valid number!';
  }

  prompt(result);

  prompt('Would you like to perform another operation? (y/n)');
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
}
