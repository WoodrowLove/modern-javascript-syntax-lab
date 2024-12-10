// Copying an Array
const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];

console.log(duplicateArray); // [1, 2, 3]

// Incorrect Assignment Resulting in Reference
const originalArrayRef = [1, 2, 3];
const referenceArray = originalArrayRef; // referenceArray is now a reference to originalArrayRef

referenceArray.push(4); // Modifying referenceArray also modifies originalArrayRef
console.log(originalArrayRef); // [1, 2, 3, 4]

// Merging Multiple Arrays
const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']
