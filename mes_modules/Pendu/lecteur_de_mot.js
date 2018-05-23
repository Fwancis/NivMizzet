const fs = require("fs");

var lol = fs.writeFileSync("monFichier", "contenu du fichier", "UTF-8");
var content
content = fs.readFileSync("monFichier", "UTF-8");
var dicoString = fs.readFileSync("mes_modules/Pendu/dictionnaire.txt", "UTF-8");
dicoString = dicoString.replace("\r", "");
var dicoTab = dicoString.split("\n");

console.log(dicoTab);
var nbLettresMin = 9999;
var nbLettresMax = 0;
for(var i = 0; i < dicoTab.length-1; i++){
  dicoTab[i] = dicoTab[i].replace("\r", "");
  if(nbLettresMin > dicoTab[i].length){
    nbLettresMin = dicoTab[i].length;
    console.log("petit mot " + dicoTab[i] + " ligne " + (i+1));
  }
  if(nbLettresMax < dicoTab[i].length){
    nbLettresMax = dicoTab[i].length;
    console.log("grand mot " + dicoTab[i] + " ligne " + (i+1));
  }
}
console.log("nbMin = "+nbLettresMin);
console.log("nbMax = "+nbLettresMax);

module.exports = {
	dicoTab: dicoTab,
  nbLettresMin: nbLettresMin,
  nbLettresMax: nbLettresMax
}
