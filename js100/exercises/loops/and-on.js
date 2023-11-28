// The following code keeps looping forever. Why is that? 
// Also modify it so that it stops after the first iteration.

// infinite loop:
for (let i = 0; ; i += 1) {
  console.log("and on");
}
// It's because the loop doesn't have a stopping condition.

// One way to fix this code is to give a condition to our for loop:
for (let i = 0; i < 1; i += 1) {
  console.log("and on");
}
// and on
