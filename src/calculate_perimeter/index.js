// Створити функцію countSum з параметром n, який
//означатиме кількість цифр, які потрібно згенерувати
//від 1 до n та порахувати їх суму.
// countSum(5) => 1 + 2 + 3 + 4 + 5 = 15

function perimeter(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
perimeter(5);

module.exports = perimeter;
