// Student Info System Demo

// String
let university = "AIUB";
let studentName = "Chandon";

// Number
let age = 24;
let cgpa = 3.15;

// Boolean
let isGraduated = false;

// Null & Undefined
let thesisTopic = null; // Not decided yet
let job; // undefined (not assigned)

// Array
let courses = ["SWE", "OS", "SQA", "SDPM"];

// Object
let student = {
  name: studentName,
  age: age,
  university: university,
  cgpa: cgpa,
  isGraduated: isGraduated,
  courses: courses
};

// Function
function printStudentInfo(stu) {
  console.log("---- Student Info ----");
  console.log(`Name: ${stu.name}`);
  console.log(`Age: ${stu.age}`);
  console.log(`University: ${stu.university}`);
  console.log(`CGPA: ${stu.cgpa}`);
  console.log(`Graduated: ${stu.isGraduated ? "Yes" : "No"}`);
  console.log("Courses:", stu.courses.join(", "));
  console.log("----------------------");
}

// Call function
printStudentInfo(student);

// Update values
student.isGraduated = true;
thesisTopic = "AI-powered Test Case Validator";
job = "Software Engineer";

// Show updated info
console.log("\nAfter Update:");
console.log(`Thesis Topic: ${thesisTopic}`);
console.log(`Job: ${job}`);
console.log(`Graduated Status: ${student.isGraduated}`);
