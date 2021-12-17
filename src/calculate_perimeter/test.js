const assert = require("assert");
const perimeter = require("./index");

describe("Number sum test", () => {
  it("Checks correct sum", () => {
    assert.equal(perimeter(0), 0);
    assert.equal(perimeter(5), 15);
    assert.equal(perimeter(222), 24753);
  });
});
