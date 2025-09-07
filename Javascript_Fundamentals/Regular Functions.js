// Student Grading System (Regular Function)

function calculateGrade(marks) {
  if (marks >= 80) return "A+";
  else if (marks >= 70) return "A";
  else if (marks >= 60) return "B";
  else if (marks >= 50) return "C";
  else return "F";
}

function printReport(studentName, marksArray) {
  console.log("---- Student Report ----");
  console.log("Name:", studentName);

  for (let i = 0; i < marksArray.length; i++) {
    let subject = marksArray[i].subject;
    let marks = marksArray[i].marks;
    let grade = calculateGrade(marks);
    console.log(`${subject}: ${marks} → Grade: ${grade}`);
  }

  console.log("-------------------------\n");
}

// Test
printReport("Chandon", [
  { subject: "Math", marks: 85 },
  { subject: "Physics", marks: 72 },
  { subject: "English", marks: 60 }
]);
