const assert = require("assert");
const sumReducer = require("./index");

describe("Sum reducer test", () => {
  it("Checks positive numbers", () => {
    assert.equal(sumReducer(123), 6);
    assert.equal(sumReducer(30385), 1);
    assert.equal(sumReducer(44161), 7);
  });

  it("Checks negative numbers", () => {
    assert.equal(sumReducer(-123), 6);
    assert.equal(sumReducer(-30385), 1);
    assert.equal(sumReducer(-44161), 7);
  });
});
