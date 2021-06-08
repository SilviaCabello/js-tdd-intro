const assert = require("assert");

//function capitalizeFirstLetters
//accepts a string as input and returns a string
//separated words by spaces
//convert the first letter of each word to uppercase

function capitalizeFirstLetters(input) {
  let output = input.split(" ");
  let newOutput = [];

  for (let i = 0; i < output.length; i++) {
    newOutput.push(output[i].charAt(0).toUpperCase() + output[i].slice(1));
  }
  return newOutput.join(" ");
}

//test1 a string with several words
//test2 a string with a single word
//test3 an empty string
assert.strictEqual(
  capitalizeFirstLetters("hey hello world"),
  "Hey Hello World"
);
assert.strictEqual(capitalizeFirstLetters("hello"), "Hello");
assert.strictEqual(capitalizeFirstLetters(""), "");
