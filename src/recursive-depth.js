const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth) {
    //throw new CustomError('Not implemented');
  depth = depth||1;
  //console.log(depth);
  if (arr.some(e => Array.isArray(e))){ 
    let newArr = arr.flat()
    depth = this.calculateDepth(newArr, depth)+1
  } 
  return depth;
  }
};