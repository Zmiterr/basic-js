const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    //throw new CustomError('Not implemented');
     this.arr.length;
     return this;
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    this.arr.push(String(value))
    return this;
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    if (typeof(position)!='number' || position < 0) {
      this.arr = [];
      throw new Error;
    }    
    this.arr.splice(position - 1, 1);
    return this;  
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    this.arr.reverse();
    return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    let chain = this.arr;
    this.arr = [];        
    return `( ${chain.join(' )~~( ')} )`;
  }
};

module.exports = chainMaker;
