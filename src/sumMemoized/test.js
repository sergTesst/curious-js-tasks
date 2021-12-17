const assert = require("assert");
const sinon = require("sinon");
const { sum, mul, memoize } = require("./index");

describe("Memoization test", () => {
  const methods = {
    sum,
    mul,
  };

  it("Memorized sum function 2 + 2 must equal 4", () => {
    const sumMemo = memoize(methods.sum);

    assert.equal(sumMemo(2, 2), 4);
  });

  it("Memorized mul function 3 * 3 must equal 9", () => {
    const mulMemo = memoize(methods.mul);

    assert.equal(mulMemo(2, 2), 4);
  });

  it("The original function called once after calling its 'memorized' wrapper 3 times (should not trigger original calculation but get cached value instead)", () => {
    const spy = sinon.spy(methods, "sum");
    const sumMemo = memoize(methods.sum);
    sumMemo(2, 5);
    sumMemo(2, 5);
    sumMemo(2, 5);

    assert.equal(spy.callCount, 1);
  });
});
