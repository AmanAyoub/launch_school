// && has a higher operator precedence than ||, so yes we need the parentheses:

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving); // returns true

// On line7, we used (&&) operator, it returns true if both of the operands are true.
// left side operand checks whether brakingForce is less than acceleration, it returns true, it is less than acceleration.
// right side operand inside the parentheses, we used (||) operator it returns true if one of the operands is true
// first checks if speed is greater than 0, returns false. then checks if acceleration is greater than 0, 
// it returns true. since both operands are true isMoving variable will give us true.

