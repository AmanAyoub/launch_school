/*
You are given an array of student objects, where each student object contains:
* An integer id (representing the student’s ID).
* An array grades of integers (representing the student’s grades).
You need to write a function/method that finds the nth largest grade across
all students and returns the id of the student who received that grade.
If there are multiple students with the same grade, return the student with the lowest id.


In: array, number
Out: number
Rules:
 - If multiple answers found, return the student with the lowest id
 - If input num is greater than the number of grades, return null

Array: to store all grades

 - Extract the grades from students, sort them by value
 - Find the student that has the nth largest grade

1. Get the  grades from all students (see the getGrades func below)
2. Extract the grade at position of the second input (nth largest grade)
3. Sort the input array of students by their IDs
4. Iterate through the input array
  - If the current student grades contain nth largest grade
    - Return the ID of the current student
5. Return null

function: getGrades(array)
------------------------
1. Create an empty array grades
2. Iterate through the input array
  - Append the grades of the current student to grades
3. Expand the grades array
4. Sort the grades array by value
5. Return the grades array/list
*/

function nthLargestGrade(students, int) {
  let grades = getGrades(students);
  let largestGrade = grades[int - 1];
  students = students.slice().sort((a, b) => a.id - b.id);
  for (let student of students) {
    if (student.grades.includes(largestGrade)) {
      return student.id;
    }
  }

  return null;
}

function getGrades(array) {
  let grades = [];
  for (let student of array) {
    grades.push(student.grades);
  }

  grades = grades.flat();
  grades.sort((a, b) => b - a);
  return grades;
}


// Test Cases
const students = [
  { id: 2, grades: [95, 75, 88] },
  { id: 1, grades: [95, 85, 78] },
  { id: 3, grades: [95, 70, 85] }
];

console.log(nthLargestGrade(students, 3)); // Output: 1
console.log(nthLargestGrade(students, 1)); // Output: 1
console.log(nthLargestGrade(students, 4)); // Output: 2
console.log(nthLargestGrade(students, 5)); // Output: 1
console.log(nthLargestGrade(students, 10)); // Output: null