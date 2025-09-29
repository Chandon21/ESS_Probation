// Narrowing Example

function printLength(value: string | number): void {
  if (typeof value === "string") {
    console.log("String length:", value.length); // narrowed to string
  } else {
    console.log("Number length:", value.toString().length); // narrowed to number
  }
}

printLength("Hello");
printLength(12345);
