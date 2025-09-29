// Interface Example

interface Person {
  name: string;
  age: number;
  email?: string; // optional property
}

const student: Person = {
  name: "Rahim",
  age: 22,
  email: "rahim@example.com",
};

const teacher: Person = {
  name: "Karim",
  age: 40,
};

console.log(student);
console.log(teacher);
