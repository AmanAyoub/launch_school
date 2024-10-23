function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
}
Person.prototype.communicate = function () {
  return "Hi! How's it going?";
}
Person.prototype.eat = function () {
  return "Eating";
}
Person.prototype.sleep = function () {
  return "Sleeping";
}

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function () {
  return "Diagnosing";
}

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function () {
  return "Teaching";
}


function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function () {
  return "Studying";
}

function GraduateStudent(firstName, lastName, age, gender, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, graduateDegree);
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;
GraduateStudent.prototype.research = function () {
  return "Researching";
}


const person = new Person('Foo', 'Bar', 21, 'male');
console.log(person instanceof Person);       // logs true
console.log(person instanceof Doctor);       // logs false
console.log(person instanceof Professor);    // logs false
console.log(person instanceof Student);      // logs false
console.log(person.eat());                                // logs 'Eating'
console.log(person.communicate());                        // logs 'Communicating'
console.log(person.sleep());                              // logs 'Sleeping'
console.log(person.fullName());              // logs 'Foo Bar'

const doctor = new Doctor('Bar', 'Qux', 21, 'female', 'Pediatrics');
console.log(doctor instanceof Person);       // logs true
console.log(doctor instanceof Doctor);       // logs true
console.log(doctor instanceof Professor);    // logs false
console.log(doctor instanceof Student);      // logs false
console.log(doctor.eat());                                // logs 'Eating'
console.log(doctor.communicate());                        // logs 'Communicating'
console.log(doctor.sleep());                              // logs 'Sleeping'
console.log(doctor.fullName());              // logs 'Bar Qux'
console.log(doctor.diagnose());                           // logs 'Diagnosing'

const professor = new Professor('Bar', 'Foo', 48, 'female', 'Law');
console.log(professor instanceof Person);    // logs true
console.log(professor instanceof Professor); // logs true
console.log(professor instanceof Doctor);    // logs false
console.log(professor instanceof Student);   // logs false
professor.eat();                             // logs 'Eating'
professor.communicate();                     // logs 'Communicating'
professor.sleep();                           // logs 'Sleeping'
console.log(professor.fullName());           // logs 'Bar Foo'
professor.teach();                           // logs 'Teaching'


function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.teach = () => {
  console.log('Teaching');
};
Professor.prototype.constructor = Professor;


const graduateStudent = new GraduateStudent('Qux', 'Bar', 21, 'non-binary', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);          // logs true
console.log(graduateStudent instanceof Student);         // logs true
console.log(graduateStudent instanceof GraduateStudent); // logs true
console.log(graduateStudent instanceof Professor);       // logs false
console.log(graduateStudent instanceof Doctor);          // logs false
graduateStudent.eat();                       // logs 'Eating'
graduateStudent.communicate();               // logs 'Communicating'
graduateStudent.sleep();                     // logs 'Sleeping'
console.log(graduateStudent.fullName());     // logs 'Qux Bar'
graduateStudent.study();                     // logs 'Studying'
graduateStudent.research();                  // logs 'Researching'