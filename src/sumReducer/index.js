//Дано n, потрібно порахувати суму всіх цифр n.
//Якщо n містить більше ніж 1 цифру, продовжувати калькуляцію допоки не отримаєм 1 число.
//Якщо n від'ємне, потрібно калькулювати його додатнє значення (модуль від n)

function sumReducer(n) {
  const result = `${Math.abs(n)}`.split("").reduce((prev, curr) => {
    return prev + Number(curr);
  }, 0);
  return `${result}`.length > 1 ? sumReducer(result) : result;
}

// console.log(sumReducer(-44161));

module.exports = sumReducer;
