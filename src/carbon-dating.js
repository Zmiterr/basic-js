const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  //throw new CustomError('Not implemented');
  if (typeof sampleActivity !== "string") 
    return false;

  let actNum = +sampleActivity;

  if (isNaN(actNum) || actNum > MODERN_ACTIVITY || actNum < 1) return false;

  return Math.ceil((Math.log(MODERN_ACTIVITY/actNum))/( Math.LN2/HALF_LIFE_PERIOD))
};
