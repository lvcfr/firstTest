const myPet = require('./testClass.js');
const assert = require('assert');

const firstPet = new myPet('dog', 'kira', 500); 
const secondPet = new myPet('cat', 'traitor', 200); 

console.log(firstPet.constructor === myPet);
console.log(secondPet.getName());
console.log(firstPet.getKind());

function greetings(name) {
    const sayThis = `welcome ${name}!`;

    assert(typeof name === 'string', 'wrong type!'); 

    outputIt(sayThis);
}

function outputIt(phrase) {
    console.log(phrase);
}

greetings('hello world');

const reduceSampleTest = [1, 2, 3, 4, 5];

const accuReduceSampleTest = reduceSampleTest
    .reduce((prev, curr) => prev + curr, 5);

console.log(accuReduceSampleTest);

