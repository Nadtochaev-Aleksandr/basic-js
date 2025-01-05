const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined || date === null) {
    throw new NotImplementedError('Unable to determine the time of year!');
  }
  if (date instanceof Date && !isNaN(date.getTime())) {
    if (typeof date === 'object') {
      const month = date.getMonth() + 1;
      if (month >= 1 && month <= 2 || month === 12) {
        return 'winter';
      }
      if (month >= 3 && month <= 5) {
        return 'spring';
      }
      if (month >= 6 && month <= 8) {
        return 'summer';
      }
      if (month >= 9 && month <= 11) {
        return 'autumn';
      }
    }
    throw new NotImplementedError('Invalid date!');
  } else {
    throw new NotImplementedError('Invalid date!');
  }
}


module.exports = {
  getSeason
};
