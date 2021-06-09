const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

describe("capitalizeFirstLetters", () => {
  it("capitalize the first letter of each word in a string", () => {
    assert.strictEqual(
      capitalizeFirstLetters("hey hello world"),
      "Hey Hello World"
    );
  });

  it("capitalize the first letter of a single world", () => {
    assert.strictEqual(capitalizeFirstLetters("hello"), "Hello");
  });

  it("it works with an empty string", () => {
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });
});
