const tableaux = require('../tableaux.js');

var getMot = function(mot){
  var motlc = mot.toLowerCase();
  var i = 0;
  var res = "";
  while (i < motlc.length) {
    if (tableaux.alphabet.includes(motlc[i])){
      res += ":regional_indicator_" + motlc[i] + ":";
    }else{
      res += " \\_ ";
    }
    i++;
  }
  return res;
}

module.exports = {
  getMot: getMot
}
