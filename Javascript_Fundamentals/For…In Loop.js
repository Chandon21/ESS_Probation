console.log("5️⃣ For…In Loop:");

const student = {
    name: "Chandon",
    age: 24,
    cgpa: 3.15
};

for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
console.log("----------------------\n");
