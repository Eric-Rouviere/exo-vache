const firstName = 'Pulpy';
const age = 30;
const passions = ['Pétanque', 'Apéro', 'Sport'];

function displayPassions() {
    console.log(`My passions are :`);
    for (let i = 0; i < passions.length; i += 1) {
      console.log(`- ${passions[i]}`);
    }
  }
  
  module.exports = {
    name: firstName,
    age: age,
    displayPassions: displayPassions,
  };