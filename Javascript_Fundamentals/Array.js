// ---------------- Creating Arrays ----------------
let fruits = ["Mango", "Banana", "Apple"];   // Array literal
let numbers = new Array(10, 20, 30, 40);    // Using Array constructor
let emptyArray = [];                         // Empty array

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);
console.log("Empty Array:", emptyArray);
console.log("----------------------\n");

// ---------------- Accessing Array Elements ----------------
console.log("First Fruit:", fruits[0]);     // Mango
console.log("Last Fruit:", fruits[fruits.length - 1]); // Apple

// ---------------- Modifying Array Elements ----------------
fruits[1] = "Orange"; // change Banana to Orange
console.log("After Modification:", fruits);

// ---------------- Array Methods ----------------

// 1. Adding elements
fruits.push("Grapes");       // Add at end
fruits.unshift("Strawberry"); // Add at beginning
console.log("After Adding:", fruits);

// 2. Removing elements
fruits.pop();    // Remove from end
fruits.shift();  // Remove from beginning
console.log("After Removing:", fruits);

// 3. Finding elements
console.log("Index of Apple:", fruits.indexOf("Apple")); // 2
console.log("Includes Mango?", fruits.includes("Mango")); // true

// 4. Slicing & Splicing
let someFruits = fruits.slice(1, 3); // Extract from index 1 to 2
console.log("Sliced Array:", someFruits);

fruits.splice(1, 1, "Papaya", "Kiwi"); // Replace 1 element at index 1
console.log("After Splice:", fruits);

// 5. Iteration
console.log("Iterating using for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("Iterating using forEach:");
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// 6. Map & Filter
let fruitLengths = fruits.map(fruit => fruit.length); // length of each fruit
console.log("Fruit Lengths:", fruitLengths);

let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log("Fruits with length > 5:", longFruits);

// 7. Sorting & Reversing
let numbersToSort = [50, 10, 30, 20, 40];
numbersToSort.sort((a, b) => a - b); // ascending
console.log("Sorted Numbers:", numbersToSort);
numbersToSort.reverse();
console.log("Reversed Numbers:", numbersToSort);

// 8. Joining & Splitting
let fruitString = fruits.join(", "); // convert to string
console.log("Fruits as String:", fruitString);

let newFruitsArray = fruitString.split(", "); // back to array
console.log("Back to Array:", newFruitsArray);

// ---------------- Multi-dimensional Arrays ----------------
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matrix:", matrix);
console.log("Element at [1][2]:", matrix[1][2]); // 6

console.log("Iterating 2D Array:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        process.stdout.write(matrix[i][j] + " "); // prints in same line
    }
    console.log(); // new line
}

// ---------------- Converting Array to Set (Unique Values) ----------------
let nums = [1, 2, 2, 3, 4, 4, 5];
let uniqueNums = [...new Set(nums)];
console.log("Unique Numbers:", uniqueNums);

// ---------------- Array Destructuring ----------------
let [first, second, ...rest] = fruits;
console.log("First:", first);
console.log("Second:", second);
console.log("Rest:", rest);

// ---------------- Spread Operator ----------------
let moreFruits = ["Pineapple", "Papaya"];
let combinedFruits = [...fruits, ...moreFruits];
console.log("Combined Fruits:", combinedFruits);
