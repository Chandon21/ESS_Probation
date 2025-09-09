// Lexical Scope: Inner function can access outer variables
function outerFunction() {
    let outerVar = "I am outer variable";

    function innerFunction() {
        let innerVar = "I am inner variable";
        console.log("Inside Inner Function:");
        console.log(outerVar); //  Accessible
        console.log(innerVar); //  Accessible
    }

    innerFunction();

    // console.log(innerVar);  Not accessible here
}

outerFunction();
console.log("----------------------\n");
