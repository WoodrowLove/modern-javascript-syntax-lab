// Copying an Object
const originalObject = {
    foo: 'Hello',
    bar: 100,
  };
  
  const clonedObject = { ...originalObject };
  console.log('Clone: ', clonedObject); // { foo: 'Hello', bar: 100 }
  
  // Direct Assignment Leading to Reference
  const referenceObject = originalObject;
  referenceObject.foo = 'Goodbye';
  
  console.log(originalObject); // { foo: 'Goodbye', bar: 100 }
  
  // Using Spread Operator for Independent Copy
  const independentClonedObject = { ...originalObject };
  independentClonedObject.foo = 'Goodbye';
  independentClonedObject.bar = 0;
  
  console.log('Original: ', originalObject); // { foo: 'Hello', bar: 100 }
  console.log('Clone: ', independentClonedObject); // { foo: 'Goodbye', bar: 0 }

  