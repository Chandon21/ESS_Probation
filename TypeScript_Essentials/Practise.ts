
    interface Person {
    name : string;
}
function greet<T extends Person>(person: T): string{
    return `hello ${person.name}`;
}


console.log(greet({name: "Chandan" }))

export {}
