const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members)?members.filter(e => typeof e ==='string').map(function edStr(e){   
                                                                                    return e.trim().toUpperCase()[0] 
  }).sort().join(''):false
};
