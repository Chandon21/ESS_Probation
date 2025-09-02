// Calculator using JavaScript basics

function calculate() {
  // Variables (let & const)
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  
  let result;

  // Statements + Operators
  if (operator === "+") {
    result = num1 + num2;   // Addition
  } else if (operator === "-") {
    result = num1 - num2;   // Subtraction
  } else if (operator === "*") {
    result = num1 * num2;   // Multiplication
  } else if (operator === "/") {
    // Avoid dividing by zero
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
  } else {
    result = "Invalid operator";
  }

  // Show result in HTML
  document.getElementById("result").innerHTML = `Result: ${result}`;
}
