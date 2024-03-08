function catAge(humanAge) {
  let catAge = 0;

  if (humanAge) {
    catAge += 15;
    humanAge -= 1;
    if (humanAge) {
      catAge += 9;
      humanAge -= 1;
    }
  }

  // For every subsquent human year add 4 cat years:
  for (let iterator = 0; iterator < humanAge; iterator++) {
    catAge += 4;
  }
  return catAge;
}

console.log(catAge(3)); // 28
console.log(catAge(10)); // 56