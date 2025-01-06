const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  if (typeof email !== 'string') {
    throw new NotImplementedError('качестве аргумента передана не строка');
  }
  let arr = email.split('@');
  console.log(arr);
  return arr[arr.length - 1];
}

module.exports = {
  getEmailDomain
};
