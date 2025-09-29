// Union Example

function printId(id: number | string): void {
  console.log("User ID:", id);
}

printId(101);      // number
printId("U-202");  // string
