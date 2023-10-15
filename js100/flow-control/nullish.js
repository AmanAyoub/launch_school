// The nullish coalescing ( ?? ) operator that returns its right-hand side operand 
// when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand.

function foo(str) {
  let found = ["Aman", "Ali", "Sahil"].find(name => name === str);
  return found ?? "Not found";
}
console.log(foo('Sahil'));










