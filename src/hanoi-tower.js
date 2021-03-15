const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  var retObj = {};
  retObj.turns = Math.pow(2, disksNumber)-1;
  retObj.seconds = Math.floor(retObj.turns / (turnsSpeed/60/60));
  return retObj
};
