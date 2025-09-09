// Student Grading System (Callback Function)

// Callback to calculate grade
function calculateGrade(marks, callback) {
  let grade;
  if (marks >= 80) grade = "A+";
  else if (marks >= 70) grade = "A";
  else if (marks >= 60) grade = "B";
  else if (marks >= 50) grade = "C";
  else grade = "F";

  callback(grade); // call the callback with the grade
}

function printReport(studentName, marksArray) {
  console.log("---- Student Report ----");
  console.log("Name:", studentName);

  marksArray.forEach((item) => {
    calculateGrade(item.marks, (grade) => {
      console.log(`${item.subject}: ${item.marks} → Grade: ${grade}`);
    });
  });

  console.log("-------------------------\n");
}

// Test
printReport("Chandon", [
  { subject: "Math", marks: 88 },
  { subject: "Physics", marks: 66 },
  { subject: "English", marks: 52 }
]);
