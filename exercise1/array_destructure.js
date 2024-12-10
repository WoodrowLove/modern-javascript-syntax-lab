const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

// more examples
const [thirdPet, , fourthPet] = petsArray;
console.log(thirdPet); // 'Snuffles'

const [pet1, pet2, pet3, pet4, pet5 = 'Unknown'] = petsArray;
console.log(pet5); // 'Unknown'
