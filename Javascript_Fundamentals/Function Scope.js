// Function Scope: Only accessible inside function
function functionScopeDemo() {
    var functionVar = "I am function-scoped (var)";
    let functionLet = "I am function-scoped (let)";
    const functionConst = "I am function-scoped (const)";
    
    console.log("Inside Function:");
    console.log(functionVar);
    console.log(functionLet);
    console.log(functionConst);
}

functionScopeDemo();

// console.log(functionVar); ❌ Not accessible outside
// console.log(functionLet); ❌ Not accessible outside
// console.log(functionConst); ❌ Not accessible outside
console.log("----------------------\n");
