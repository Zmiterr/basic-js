const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members)?members.flat(10).filter(e => typeof(e)=='string').map(function edStr(e){   
                                                                                    return e.trim().toUpperCase()[0] 

  }).sort().join(''):false
};
