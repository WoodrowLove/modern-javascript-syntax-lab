const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  
  const myCar = { ...car };
  
  myCar.model = 'q7';
  
  
  console.log(car); 
  console.log(myCar); 
  