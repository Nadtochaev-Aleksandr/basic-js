const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!Array.isArray(domains)) {
    throw new NotImplementedError('В качестве аргумента передан не массив данных');
  }
  let resultObject = {};
  let iterationObject = {};
  let domenContainsNumber = 0;
  let addresContainsNumber = 0;
  let indexContainsNumber = 0;

  for (let i = 0; i < domains.length; i += 1) {
    console.log(`Рассматриваемый элемент domains[${i}] = ${domains[i]}`);
    let domensElements = domains[i].split('.');
    let domen = '';
    let addres = '';
    let index = '';
    console.log(`промежуточный элемент domensElements = ${domensElements}`);
    domen = domen + '.' + domensElements[domensElements.length - 1];
    console.log(`domen = ${domen}`);
    addres = domensElements[domensElements.length - 2];
    console.log(`addres = ${addres}`);
    if (domains[i].includes(domen)) {
      domenContainsNumber += 1;
      console.log(`domenContainsNumber = ${domenContainsNumber}`)
    }
    if (domains[i].includes(addres)) {
      addresContainsNumber += 1;
      console.log(`addresContainsNumber = ${addresContainsNumber}`)
    }
    Object.assign(iterationObject, {domen: domenContainsNumber});
    Object.assign(iterationObject, {addres: addresContainsNumber});
    if (domensElements.length > 2) {
      index = domensElements[domensElements.length - 3];
      if (domains[i].includes(index)) {
        indexContainsNumber += 1;
        console.log(`indexContainsNumber = ${indexContainsNumber}`)
      }
      console.log(`index = ${index}`);
      Object.assign(iterationObject, {index: indexContainsNumber});
    }
    console.log(iterationObject);
  }
  Object.assign(resultObject, iterationObject);
  console.log(resultObject);
  return resultObject;
}

module.exports = {
  getDNSStats
};
