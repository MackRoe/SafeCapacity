const prompt = require('prompt-sync')({sigint: true});

console.log('Please enter the Length and Width of your indoor space in feet');

let spaceLength = prompt("Length: ");
let spaceWidth = prompt("Width: ");
let dividerValue = 6;

let squareSpace = Number(spaceLength) * Number(spaceWidth);

let maxOccupancy = Math.floor(squareSpace/dividerValue);


console.log("The maximum number of people that can safely occupy your space is " + maxOccupancy);

// Q: does this need to be in a function?
