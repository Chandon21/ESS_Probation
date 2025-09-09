// ---------------- Global Scope ----------------
var university = "AIUB"; // global, var
let semester = "10th Semester"; // global, let
const collegeCode = "CSE21"; // global, const

console.log("Global Scope:");
console.log(university, semester, collegeCode);
console.log("----------------------\n");

// ---------------- Function Scope ----------------
function studentDetails(name, age) {
    var studentVar = `Name: ${name}`; // function-scoped
    let ageLet = `Age: ${age}`;       // function-scoped
    const enrolledConst = `Enrolled in: ${semester}`; // function-scoped

    console.log("Inside Function Scope:");
    console.log(studentVar);
    console.log(ageLet);
    console.log(enrolledConst);

    // ---------------- Block Scope ----------------
    if (age >= 18) {
        var adultVar = "Adult student (var)"; // var ignores block
        let adultLet = "Adult student (let)"; // let is block-scoped
        const adultConst = "Adult student (const)"; // const is block-scoped

        console.log("Inside Block Scope:");
        console.log(adultVar);
        console.log(adultLet);
        console.log(adultConst);
    }

    console.log("Outside Block but inside Function:");
    console.log(adultVar); //  var is still accessible
    // console.log(adultLet);  Error
    // console.log(adultConst);  Error

    // ---------------- Lexical / Nested Scope ----------------
    function grades() {
        let marks = [85, 72, 60];
        console.log("Inside Nested Function (Lexical Scope):");
        console.log(`${name}'s Marks:`, marks);
        console.log(`Access outer function variable: ${studentVar}`);
        let total = marks.reduce((a, b) => a + b, 0);
        console.log(`Total Marks: ${total}`);
    }

    grades(); // call nested function
}

// Call studentDetails function
studentDetails("Chandon", 24);

console.log("\nOutside Function Scope:");
// console.log(studentVar);  Error
// console.log(ageLet);  Error
// console.log(enrolledConst);  Error
// console.log(adultLet);  Error
// console.log(adultConst);  Error
console.log("----------------------\n");

// Global variables are still accessible
console.log("Accessing Global Variables Outside Function:");
console.log(university, semester, collegeCode);
