const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity === '' || sampleActivity === ' ') {
    // console.log(`Вводимый параметр должен быть типа "string" и не быть пустым - выводим false`)
    return false;
  }
  // console.log(`введенное число ${sampleActivity} - активность исследуемого образца`);
  const numberSampleActivity = Number(sampleActivity);
  // console.log(numberSampleActivity);
  // console.log(typeof numberSampleActivity);
  // console.log(`результат конвертации введенного числа к number - ${numberSampleActivity}`);
  if (typeof numberSampleActivity !== 'number' || Number.isNaN(numberSampleActivity) || numberSampleActivity <= 0) {
    // console.log(`Так как при конвертации введенного значения не число либо неадекватное значение - выводим false`)
    return false;
  }
  const constSpeedReacction = 0.693 / HALF_LIFE_PERIOD;
  // console.log(`константа скорости реакции распада равна ${constSpeedReacction} год в степени минус 1`);
  const resultOld = Math.log(MODERN_ACTIVITY / sampleActivity) / constSpeedReacction;
  // console.log(`Итого возраст образца составляет ${resultOld}`);
  // console.log(`Округление полученного значения до большего ${Math.ceil(resultOld)} лет`);
  if (resultOld < 0) {
    return false;
  }
  return Math.ceil(resultOld);
}

module.exports = {
  dateSample
};
