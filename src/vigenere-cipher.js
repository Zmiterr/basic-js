const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  encrypt(message, key) {
    //throw new CustomError('Not implemented');
     if(arguments.length ==0) throw new Error();
  }    
  decrypt(message, key) {
    //throw new CustomError('Not implemented');
     if(arguments.length ==0) throw new Error();
  }
}

module.exports = VigenereCipheringMachine;
