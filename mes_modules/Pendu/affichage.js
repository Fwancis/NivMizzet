const tableaux = require('../tableaux.js');
const util = require('../utilitaire.js');

var getMot = function(mot){
  var motlc = mot.toLowerCase();
  var i = 0;
  var res = "";
  while (i < motlc.length) {
    if (util.tableauContient(tableaux.alphabet, motlc[i])){
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
