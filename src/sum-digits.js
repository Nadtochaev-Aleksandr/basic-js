const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (typeof n !== 'number') {
    throw new NotImplementedError('Введено не число');
  }
  let resultSum = 0;
  let newN = n;

  function sumDigitsNumbers(number) {
    let sumNumberDigits = 0
    console.log(`number = ${number}`);
    while (number > 0) {
      sumNumberDigits += number % 10;
      console.log(`sumNumberDigits = ${sumNumberDigits}`);
      number = Math.floor(number / 10);
      console.log(`number после итерации = ${number}`);
    }
    return sumNumberDigits;
  }
  resultSum = sumDigitsNumbers(newN);
  while (resultSum >= 10) {
    resultSum = sumDigitsNumbers(resultSum);
  }

  console.log(`ИТОГО resultSum = ${resultSum}`);
  return resultSum;
}

module.exports = {
  getSumOfDigits
};
