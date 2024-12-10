// && Operator Examples
const result1 = false && 'foo';
console.log(result1); // Output: false

const result2 = 'hello' && '';
console.log(result2); // Output: ''

const result3 = 'foo' && 'bar';
console.log(result3); // Output: 'bar'

// || Operator Examples
const result4 = '' || 'foo';
console.log(result4); // Output: 'foo'

const result5 = 2 || 0;
console.log(result5); // Output: 2

const result6 = '' || 0;
console.log(result6); // Output: 0

// Guessing Values
const resultA = 'bar' && 'foo';
const resultB = false || 243;
const resultC = 42 && false;
const resultD = myVar || 3000;

console.log('resultA:', resultA); // 'foo'
console.log('resultB:', resultB); // 243
console.log('resultC:', resultC); // false
console.log('resultD:', resultD); // depends on the value of myVar
