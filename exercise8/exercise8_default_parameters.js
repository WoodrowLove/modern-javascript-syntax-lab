// Function with default parameters
function describeAnimal(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}.`);
  }
  
  // Call the function with default values
  describeAnimal();
  
  describeAnimal('dog', 'brown');
  