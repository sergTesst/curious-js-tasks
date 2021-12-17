// Створити генератор хештегів, за наступними критеріями:
// 1) Строка має починатись з #
// 2) Cлова повинні починатись з великої літери
// 3) Якщо фінальний результат довший за 140 символів => return false
// 4) Якщо інформація на вході або результат рівний пустій строці =>
//    return false

// " Hello there thanks for joining"  =>  "#HelloThereThanksForJoining"
// "    Hello     World   " =>  "#HelloWorld"
// "" =>  false

function generateHashtag(str) {
  if (!str) return false;
  let arrStr = str.trim().split(" ");
  arrStr = arrStr
    .map((str) => {
      if (!str) return;
      const strArr = `${str}`.split("");
      strArr.splice(0, 1, `${str[0]}`.toLocaleUpperCase());
      return strArr.join("");
    })
    .filter((str) => str);
  arrStr.unshift("#");
  const finalResult = arrStr.join("");
  if (finalResult.length > 140) return false;
  return finalResult;
}
// console.log(generateHashtag(" Hello there thanks for joining"));
// console.log(generateHashtag("    Hello     World   "));

module.exports = generateHashtag;
