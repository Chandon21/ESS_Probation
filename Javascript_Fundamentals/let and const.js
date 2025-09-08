// Demo: var, let, const

// ---------------- VAR ----------------
// Function-scoped, can be redeclared & updated
var course = "Software Engineering";
console.log("Initial (var):", course);

var course = "Operating System"; // redeclared 
console.log("Redeclared (var):", course);

course = "Database"; // updated 
console.log("Updated (var):", course);


// ---------------- LET ----------------
// Block-scoped, can be updated but NOT redeclared in same scope
let cgpa = 3.15;
console.log("\nInitial (let):", cgpa);

cgpa = 3.50; // updated 
console.log("Updated (let):", cgpa);

// let cgpa = 3.80;  Error: can't redeclare in same scope


// ---------------- CONST ----------------
// Block-scoped, must be assigned when declared,
// can't be updated or redeclared
const university = "AIUB";
console.log("\nConst:", university);

// university = "DU";  Error: can't update const
// const university = "NSU";  Error: can't redeclare

// BUT: if const holds an object/array, the content can change
const courses = ["SQA", "SDPM"];
console.log("Const Array (before):", courses);

courses.push("OS"); //  allowed (modifying content, not reference)
console.log("Const Array (after):", courses);

const student = { name: "Chandon", age: 24 };
console.log("Const Object (before):", student);

student.age = 25; //  allowed
console.log("Const Object (after):", student);
