const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  //throw new CustomError('Not implemented');
  let repeatTimes =  options.repeatTimes || 1;
  let separator = options.separator?String(options.separator):'+'; 
  let addition = options.addition!==undefined?String(options.addition):'';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator 	 || '|';
  var out = '';
  var strAd = '';
  for (let i = 0; i < additionRepeatTimes; i++) {
      strAd += addition+additionSeparator;
    }
  for (let i = 0; i < repeatTimes; i++) {
    
   out += str+strAd.slice(0, -additionSeparator.length)+separator;
}
  return out.slice(0, -separator.length);
};
