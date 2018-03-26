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


/*
console.log(getMot("Coucou"));
console.log(getMot("coucou"));
console.log(getMot("cOuCoU"));
*/
console.log(getMot("Je suis Un   AnaNas "));
/*
console.log(getMot("LeMaThELiN"));
*/

module.exports = {
  getMot: getMot
}
