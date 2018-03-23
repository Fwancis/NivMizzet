var afficheMot = function(mot){
  var motlc = mot.toLowerCase();
  var i = 0;
  var res = "";
  while (i < motlc.length) {
    res += ":regional_indicator_" + motlc[i] + ": ";
    i++;
  }
  console.log(res);
}



afficheMot("Coucou");
afficheMot("coucou");
afficheMot("cOuCoU");
afficheMot("Je suis Un AnaNas");
afficheMot("LeMaThELiN");

module.exports = {
  afficheMot: afficheMot
}
