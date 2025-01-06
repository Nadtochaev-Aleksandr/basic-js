const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix ) {
  let resultSum = 0;
  let coloumnCount = matrix[0].length;
  let lineCount = matrix.length;
  for (let j = 0; j < coloumnCount; j += 1) {
    for (let i = 0; i < lineCount; i += 1) {
      if (matrix[i][j] !== 0) {
        resultSum += matrix[i][j];
      } else {
        break;
      }
    }
  }
  return resultSum;
}

module.exports = {
  getMatrixElementsSum
};
