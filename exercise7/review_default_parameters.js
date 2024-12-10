// Without Default Parameters
function addThreeNumbers(numA, numB, numC) {
    return numA + numB + numC;
  }
  
  console.log(addThreeNumbers(2)); // NaN
  
  // With Default Parameters
  function addThreeNumbersDefault(numA, numB = 2, numC = 1) {
    return numA + numB + numC;
  }
  
  console.log(addThreeNumbersDefault(2)); // 5
  
  // With Default Value for numA
  function addThreeNumbersAllDefault(numA = 1, numB = 2, numC = 1) {
    return numA + numB + numC;
  }
  
  console.log(addThreeNumbersAllDefault(2)); // 5
  