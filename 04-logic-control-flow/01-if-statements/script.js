// If Statement Syntax
if (true) {
    console.log('This is true');
  }
  
  if (false) {
    console.log('This is NOT true');
  }

  // Block scope
if (x !== y) {
    const z = 20;
    console.log(`${z} is 20`);
  }
  
  console.log(z); // Throw error

  // Shorthand If/Else
if (x >= y)
console.log(`${x} is greater than or equal to ${y}`),
  console.log('This is true');
else console.log('This is false');