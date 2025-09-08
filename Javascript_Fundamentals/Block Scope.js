// Block Scope: let/const are block-scoped, var ignores block
if (true) {
    var blockVar = "I am var inside block";
    let blockLet = "I am let inside block";
    const blockConst = "I am const inside block";

    console.log("Inside Block:");
    console.log(blockVar);
    console.log(blockLet);
    console.log(blockConst);
}

console.log("Outside Block:");
console.log(blockVar); //  var leaks outside
// console.log(blockLet);  Error: let is block scoped
// console.log(blockConst); Error: const is block scoped
console.log("----------------------\n");
