const person = {
    name: 'Alex',
    role: 'Software Engineer',
  };
  
  // Object destructuring
  const { name, role } = person;
  
  console.log(name); // 'Alex'
  console.log(role); // 'Software Engineer'
  
  // Assigning to different variable names
  const { name: personName, role: jobTitle } = person;
  
  console.log(personName); // 'Alex'
  console.log(jobTitle);   // 'Software Engineer'
  