function capitalizeFirstLetters(input) {
  let output = input.split(" ");
  let newOutput = [];

  for (let i = 0; i < output.length; i++) {
    newOutput.push(output[i].charAt(0).toUpperCase() + output[i].slice(1));
  }
  return newOutput.join(" ");
}

module.exports = capitalizeFirstLetters;

