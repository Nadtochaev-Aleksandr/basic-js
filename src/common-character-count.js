const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (typeof s1 !== 'string') {
    s1 = s1.toString();
  }
  if (typeof s2 !== 'string') {
    s2 = s2.toString();
  }
  let counter = 0;
  let seconsS2 = s2;
  let stepIndex = 0;
  while (stepIndex <= s1.length - 1) {
    for (stepIndex; stepIndex < s1.length; stepIndex += 1) {
      console.log(`stepIndex = ${stepIndex}`);
      console.log(`s1 = ${s1}`)
      console.log(`seconsS2 = ${seconsS2}`);
      console.log(`s1[${stepIndex}] = ${s1[stepIndex]}`)
      if (seconsS2.includes(s1[stepIndex])) {
        counter += 1;
        seconsS2 = seconsS2.replace(s1[stepIndex], '');
        console.log(`stepIndex после преобразования = ${stepIndex}`);
        console.log(`counter = ${counter}`)
        console.log(`seconsS2 после преобразования = ${seconsS2}`);
        break;
      }
    }
    stepIndex += 1;
  }
  console.log(`counter = ${counter}`);
  return counter;
}

module.exports = {
  getCommonCharacterCount
};