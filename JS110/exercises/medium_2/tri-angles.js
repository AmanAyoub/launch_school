/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.
*/

function triangle(num1, num2, num3) {
  let total = num1 + num2 + num3;
  if (total !== 180 || num1 === 0 || num2 === 0 || num3 === 0) return "invalid";
  if (num1 === 90 || num2 === 90 || num3 === 90) return "right";
  if (num1 < 90 && num2 < 90 && num3 < 90) return "acute";
  if (num1 > 90 || num2 > 90 || num3 > 90) return "obtuse";
}

p = console.log
p(triangle(60, 70, 50));       // "acute"
p(triangle(30, 90, 60));       // "right"
p(triangle(120, 50, 10));      // "obtuse"
p(triangle(0, 90, 90));        // "invalid"
p(triangle(50, 50, 50));       // "invalid"