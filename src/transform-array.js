const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  //throw new CustomError('Not implemented');
  if (!Array.isArray(arr)) throw new Error('not an array');
   
   retArr = [];
   for(let i = 0; i <= arr.length-1; i++) {
     if(typeof(arr[i]) == 'string') {
       //console.log('arr' + arr[i]);
       switch(arr[i]) {
           case '--discard-next':
           if(i != arr.length-1) {
           	i++;
           }           
           break;
           case '--discard-prev':
           if (retArr.length>0) {
           	if (arr[i - 2] != '--discard-next') {
           		retArr.pop();
           	}             
           }           
           break;
           case '--double-next':
           if(i != arr.length-1) {           
           retArr.push(arr[i+1]);
           }
           break;
           case '--double-prev':
           if (retArr.length>0) {
           	if (arr[i - 2] != '--discard-next') {
           		retArr.push(arr[i-1]);
           	}           
           }           
           break;
           default: retArr.push(arr[i]);
       }
     } else retArr.push(arr[i]);     
   }
   return retArr;
};
