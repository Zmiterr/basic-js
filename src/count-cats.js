const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  //throw new CustomError('Not implemented');
  return matrix.flat(10).filter(e=> e=='^^').length;
};
