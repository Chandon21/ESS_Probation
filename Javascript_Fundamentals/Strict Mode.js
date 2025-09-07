// ---------------- Without Strict Mode ----------------
console.log("Without Strict Mode:");

// Using a variable without declaring
x = 10; // automatically becomes global (bad practice)
console.log("x =", x); // 10

// Deleting a variable
var y = 5;
delete y; // doesn't throw error, fails silently
console.log("y =", y); // 5

// Duplicating parameter names in function
function sum(a, a, b) { // allowed in non-strict
    return a + a + b;
}
console.log("sum(1,2,3) =", sum(1,2,3)); // 7
console.log("----------------------\n");


// ---------------- With Strict Mode ----------------
console.log("With Strict Mode:");

"use strict"; // enable strict mode

// 1. Variables must be declared
try {
    z = 20; // ❌ ReferenceError
} catch (err) {
    console.log("Error:", err.message);
}

// 2. Deleting variables or functions not allowed
try {
    var a = 5;
    delete a; // ❌ SyntaxError
} catch (err) {
    console.log("Error:", err.message);
}

// 3. Duplicate parameter names are not allowed
try {
    function multiply(x, x) { // ❌ SyntaxError
        return x * x;
    }
} catch (err) {
    console.log("Error: Duplicate parameter names not allowed");
}

// 4. Prevents use of reserved keywords
try {
    let public = 123; // ❌ SyntaxError in strict mode
} catch (err) {
    console.log("Error: Cannot use reserved keywords as variable names");
}

// 5. Safer assignments in objects
const obj = {};
Object.defineProperty(obj, "prop", { value: 10, writable: false });
try {
    obj.prop = 20; // ❌ TypeError in strict mode
} catch (err) {
    console.log("Error:", err.message);
}

console.log("----------------------\n");

// ---------------- Benefits ----------------
console.log("Benefits of Strict Mode:");
console.log("1. Prevents accidental globals");
console.log("2. Throws errors for unsafe actions");
console.log("3. Helps catch bugs early");
console.log("4. Makes code more secure and optimized");
