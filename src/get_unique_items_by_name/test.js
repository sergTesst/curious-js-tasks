const assert = require("assert");
const { getUniqueObjectArray, input } = require("./index");

describe("Test unique array of objects", () => {
  it("Checks if output is unique", () => {
    const output = [
      { id: 2, name: "John", age: 25 },
      { id: 5, name: "Anna", age: 25 },
      { id: 4, name: "Erika", age: 30 },
      { id: 6, name: "Viktor", age: 22 },
    ];
    assert.deepEqual(getUniqueObjectArray(input), output);
  });
});
