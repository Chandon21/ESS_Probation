// Student Grading System (Arrow Function)

const calculateGrade = (marks) => {
  if (marks >= 80) return "A+";
  else if (marks >= 70) return "A";
  else if (marks >= 60) return "B";
  else if (marks >= 50) return "C";
  else return "F";
};

const printReport = (studentName, marksArray) => {
  console.log("---- Student Report ----");
  console.log("Name:", studentName);

  marksArray.forEach((item) => {
    let grade = calculateGrade(item.marks);
    console.log(`${item.subject}: ${item.marks} → Grade: ${grade}`);
  });

  console.log("-------------------------\n");
};

// Test
printReport("Chandon", [
  { subject: "Math", marks: 92 },
  { subject: "Physics", marks: 77 },
  { subject: "English", marks: 45 }
]);
