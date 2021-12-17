const input = [
  { id: 1, name: "John", age: 20 },
  { id: 2, name: "John", age: 25 },
  { id: 3, name: "Anna", age: 22 },
  { id: 4, name: "Erika", age: 30 },
  { id: 5, name: "Anna", age: 25 },
  { id: 6, name: "Viktor", age: 22 },
];

function getUniqueObjectArray(arr) {
  const uniqueMap = new Map();
  Array.from(arr).forEach((item) => {
    uniqueMap.set(item.name, item);
  });
  return Array.from(uniqueMap).map(([key, value]) => value);
}

module.exports = {
  getUniqueObjectArray,
  input,
};
