const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
	//if (Object.prototype.toString.call(date) === '[object Date]'){
   //throw new CustomError('Not implemented');
switch (date.getMonth()) {
  case 8:
  case 9:
  case 10: 
    return('autumn');
    break;
  case 2:
  case 3:
  case 4:    
    return('spring');
    break;
  case 5:
  case 6:
  case 7:    
    return('summer');
    break;
  case 11:
  case 0:
  case 1:    
    return('winter');
    break; 
  default:
    return('Unable to determine the time of year!');

}
};
