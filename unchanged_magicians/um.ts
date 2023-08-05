
function make_great(magicians:string[]) {
    return magicians.map((name) => `Great ${name}`);
  }
  
  // Function to display magicians' names
  function show_magicians(magicians:string[]) {
    console.log(magicians.join(', '));
  }
  

  const originalMagicians = ['Harry', 'Hermione', 'Ron'];
  
  const greatMagicians = make_great(originalMagicians);
  
  console.log('Original Magicians:');
  show_magicians(originalMagicians);
  
  console.log('Great Magicians:');
  show_magicians(greatMagicians);
  