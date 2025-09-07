// Global Scope: Accessible anywhere
var globalVar = "I am global (var)";
let globalLet = "I am global (let)";
const globalConst = "I am global (const)";

function checkGlobal() {
    console.log("Inside Function - Global Scope:");
    console.log(globalVar);   // Accessible
    console.log(globalLet);   // Accessible
    console.log(globalConst); // Accessible
}

checkGlobal();

console.log("Outside Function - Global Scope:");
console.log(globalVar);   // Accessible
console.log(globalLet);   // Accessible
console.log(globalConst); // Accessible
console.log("----------------------\n");
