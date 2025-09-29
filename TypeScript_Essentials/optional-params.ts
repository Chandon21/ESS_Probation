// Optional Parameters Example

function greet(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, you are ${age} years old.`;
  }
  return `Hello ${name}!`;
}

console.log(greet("Chandon"));
console.log(greet("Chandon", 25));
