const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor(direct) {
		direct === false?this.direct = false:this.direct = true;
	}

  encrypt(message, key) {
    //throw new CustomError('Not implemented');
     if(arguments.length ==0) throw new Error();
     let cryptStr = '';
     message = message.toUpperCase();
     key = key.toUpperCase();
        let keyIndex = 0;
        for (let i = 0, j = 0; i < message.length; i++) {
        	let charCode = message[i].charCodeAt(0);
            if (charCode >= 65 && charCode <= 90) {
               cryptStr += String.fromCharCode(((message[i].charCodeAt() + key[j % key.length].charCodeAt()) % 26) + 65)
               j++  
            }
            else
                cryptStr += message[i];
        }                       
        return this.direct?cryptStr.toUpperCase():cryptStr.split('').reverse().join('').toUpperCase();
  }    
  decrypt(message, key) {
    //throw new CustomError('Not implemented');
     if(arguments.length ==0) throw new Error();
     let encryptStr = '';
     message = message.toUpperCase();
     key = key.toUpperCase();
        let keyIndex = 0;
        for (let i = 0, j = 0; i < message.length; i++) {
        	let charCode = message[i].charCodeAt(0);
            if (charCode >= 65 && charCode <= 90) {
               encryptStr += String.fromCharCode(Math.abs(message[i].charCodeAt() - key[j % key.length].charCodeAt() + 26) % 26 + 65);
               j++  
            }
            else
                encryptStr += message[i];
        }                       
        return this.direct?encryptStr.toUpperCase():encryptStr.split('').reverse().join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
