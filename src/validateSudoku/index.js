// Написати функцію validateSudoku, яка отримує масив чисел і повертає true,
//якщо рішення правильне і відповідно false якщо ні.
//Якщо хоча б 1 row або column містить 0, то функція повинна повернути false

// A Sudoku board can be represented as a 9x9 matrix. It is valid if the following
// three conditions are met:

//     Each row contains unique values from 1-9.
//     Each column contains unique values from 1-9.
//     Each of the 9 sub-squares, of size 3x3, ​contains a unique value from 1-9.

const board = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

function validateSudoku(board) {
  let checkZero = true;

  let validRows = true;
  for (let i = 0; i < board.length; i++) {
    if (new Set(board[i]).size !== board[i].length) {
      validRows = false;
    }
    for (let j = 0; j < board[i].length; j++) {
      if (!board[i][j]) checkZero = false;
    }
  }

  let validCols = true;
  const arrOfColumn = [];
  for (let i = 0; i < board.length; i++) {
    arrOfColumn.push(board[i][0]);
  }
  if (new Set(arrOfColumn).size !== arrOfColumn.length) {
    validCols = false;
  }

  let valid3x3 = true;
  const squareArrLength = 3;
  const arrArrs = [];
  for (let times = 0; times < board.length; times += squareArrLength) {
    let arrOfNums = [];
    let takeTimes = times;
    for (let i = 0; i < board.length; i++) {
      let row3numArr = board[i].slice(takeTimes, takeTimes + squareArrLength);
      arrOfNums.push(...row3numArr);

      if (i > 0 && (i + 1) % squareArrLength === 0) {
        arrArrs.push(arrOfNums);
        if (arrOfNums.length !== new Set(arrOfNums).size) {
          valid3x3 = false;
        }

        arrOfNums = [];
      }
    }

    takeTimes += squareArrLength;
  }

  return validRows && validCols && valid3x3 && checkZero;
}

validateSudoku(board);

module.exports = validateSudoku;
