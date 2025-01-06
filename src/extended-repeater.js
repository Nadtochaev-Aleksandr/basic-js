const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {repeatTimes: 0, separator: '+', addition: '', additionRepeatTimes: 0, additionSeparator: '|'}) {
  let modifedStr = '';
  console.log(`str = ${str}`);
  console.log(`options.separator = ${options.separator}`);
  console.log(`options.addition = ${options.addition}`);
  console.log(`options.additionSeparator = ${options.additionSeparator}`);
  console.log(`options.repeatTimes = ${options.repeatTimes}`);
  console.log(`options.additionRepeatTimes = ${options.additionRepeatTimes}`);
  console.log(`тип данных options.addition ${typeof options.addition}`)
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  console.log(`options.repeatTimes после задания значения по умолчанию = ${options.repeatTimes}`);
  if (options.separator === undefined) {
    options.separator = '+';
  }
  console.log(`options.separator после задания значения по умолчанию = ${options.separator}`);
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  console.log(`options.additionSeparator после задания значения по умолчанию = ${options.additionSeparator}`);
  if (options.addition === undefined) {
    options.addition = '';
  }
  console.log(`options.addition осле задания значения по умолчанию = ${options.addition}`);
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  console.log(`options.additionRepeatTimes осле задания значения по умолчанию = ${options.additionRepeatTimes}`);

  if (str === undefined || typeof str === 'undefined' || str === null) {
    throw new NotImplementedError('Параметр str не задан или задан не корректно');
  }
  if (typeof str !== 'string') {
    str = str.toString();
  }
  if (typeof options.addition !== 'string') {
    // options.addition = options.addition.toString();
    options.addition = String(options.addition);
  }
  console.log(`тип данных options.addition после преобразования ${typeof options.addition}`)
  console.log(`options.addition после преобразования = ${options.addition}`);
  if (options.repeatTimes < 0 && options.repeatTimes % 1 !== 0 || options.additionRepeatTimes < 0 && options.additionRepeatTimes % 1 !== 0) {
    throw new NotImplementedError('не корректно задано число повторений, должно быть задано целым положительным числом');
  }
  if (options.repeatTimes > 1 && options.additionRepeatTimes > 1) {
    let strPlusAddition = str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
    console.log(strPlusAddition);
    modifedStr = (strPlusAddition + options.separator).repeat(options.repeatTimes - 1) + strPlusAddition;
    console.log(modifedStr);
    return modifedStr;
  } else if (options.repeatTimes === 1 && options.additionRepeatTimes === 1) {
    let strPlusAddition = str + options.addition;
    console.log(strPlusAddition);
    modifedStr = strPlusAddition;
    console.log(modifedStr);
    return modifedStr;
  } else if (options.repeatTimes > 1 && options.additionRepeatTimes === 1) {
    let strPlusAddition = str + options.addition;
    console.log(strPlusAddition);
    modifedStr = (strPlusAddition + options.separator).repeat(options.repeatTimes - 1) + strPlusAddition;
    console.log(modifedStr);
    return modifedStr;
  } else if (options.repeatTimes === 1 && options.additionRepeatTimes > 1) {
    let strPlusAddition = str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
    console.log(strPlusAddition);
    modifedStr = strPlusAddition;
    console.log(modifedStr);
    return modifedStr;
  }
  console.log(`Первоначальная str ${str}`);
  return str;
}

module.exports = {
  repeater
};
