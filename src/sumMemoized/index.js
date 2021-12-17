// Реалізуйте функцію "memoize", яка кешує повернене значення залежно від вводу.

function sum(a, b) {
  return a + b;
} // для тесту
function mul(a, b) {
  return a * b;
} // для тесту

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    if (args.length > 2) return;
    const argsKey = args.join("");
    if (cache.has(argsKey)) {
      return cache.get(argsKey);
    }
    const res = fn.apply(null, args);
    cache.set(argsKey, res);
    return res;
  };
}

// const sumMemoized = memoize(sum);
// const mulMemoized = memoize(mul);

// console.log(`sumMemoized(1, 3) `, sumMemoized(1, 3)); //  === 4;
// console.log(`sumMemoized(1, 3) `, sumMemoized(1, 3)); //  === 4;
// console.log(`mulMemoized(2, 4) `, mulMemoized(2, 4)); //  === 8;
// console.log(`sumMemoized(2, 5) `, sumMemoized(2, 5));
// console.log(`sumMemoized(2, 5) `, sumMemoized(2, 5));
// console.log(`sumMemoized(2, 5) `, sumMemoized(2, 5));

module.exports = {
  sum,
  mul,
  memoize,
};
