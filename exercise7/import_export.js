// exportingFile.js
export default 'Matt';
export const age = 43;
export const job = 'programmer';

// importingFile.js
import name, { age, job } from './exportingFile.js';
console.log(name, age, job); // 'Matt', 43, 'programmer'
