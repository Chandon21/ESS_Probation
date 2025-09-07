// let: block-scoped, can be updated
let city = "Dhaka";
city = "Chattogram"; 
console.log(city); // Chattogram

// const: block-scoped, cannot be reassigned
const country = "Bangladesh";
// country = "India"; // Error: Assignment to constant variable
console.log(country);
