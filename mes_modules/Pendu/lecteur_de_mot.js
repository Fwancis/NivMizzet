const fs = require("fs");

var lol = fs.writeFileSync("monFichier", "contenu du fichier", "UTF-8");
var content
content = fs.readFileSync("monFichier", "UTF-8");
var dicoString = fs.readFileSync("mes_modules/Pendu/dictionnaire.txt", "UTF-8");
dicoString = dicoString.replace("\r", "");
var dicoTab = dicoString.split("\n");

var nbLettresMin = 9999;
var nbLettresMax = 0;
for(var i = 0; i < dicoTab.length-1; i++){
  dicoTab[i] = dicoTab[i].replace("\r", "");
  if(nbLettresMin > dicoTab[i].length){
    nbLettresMin = dicoTab[i].length;
  }
  if(nbLettresMax < dicoTab[i].length){
    nbLettresMax = dicoTab[i].length;
  }
}

module.exports = {
	dicoTab: dicoTab,
  nbLettresMin: nbLettresMin,
  nbLettresMax: nbLettresMax
}
