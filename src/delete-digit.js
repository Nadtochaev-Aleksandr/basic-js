const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (typeof n !== 'number') {
    throw new NotImplementedError('Введено не число');
  }
  let maxNumber = -Infinity;
  let sumNumber;
  let stringN = String(n);
  console.log(stringN)
  for (let i = 0; i < stringN.length; i += 1) {
    sumNumber = Number(stringN.replace(stringN[i], ''));
    console.log(sumNumber)
    if (sumNumber > maxNumber) {
      maxNumber = sumNumber;
    }
  }
  console.log(maxNumber);
  return maxNumber;
}

module.exports = {
  deleteDigit
};
