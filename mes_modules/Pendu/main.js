const affichage = require('./affichage.js');
const tableaux = require('../tableaux.js');
const util = require('../utilitaire.js');

var motATrouver;
var actuellementTrouve;
var lettresDemandees = [];

const nbLettresMin = 3;
const nbLettresMax = 4;

var start = function(message){
	var etatDuJeu = "";
	if (jeuACommence()){
		etatDuJeu += "Il y a déjà un mot à trouver";
		etatDuJeu += getEtatDuJeu(message);
	}else{
		initGame(message);
		etatDuJeu += "Le mot à trouver a été défini. Il contient " + motATrouver.length + " lettres."
		etatDuJeu += getEtatDuJeu(message);
	}
	message.channel.send(etatDuJeu);
}

var initGame = function(message){
	var nbLettres = undefined;
	var messageSplite = message.content.split(" ");
	if (messageSplite.length > 1){
		nbLettres = parseInt(messageSplite[1]);
		nbLettres = Math.floor(nbLettres);
		if (typeof nbLettres != "number" || nbLettres < nbLettresMin || nbLettres > nbLettresMax) {
			nbLettres = undefined;
		}
	}
	startGame(nbLettres);
}

var startGame = function(nbLettres){
	chercheMot(nbLettres);
	actuellementTrouve = []
	for (var i = 0; i < motATrouver.length; i++) {
		actuellementTrouve[i] = " ";
	}
	actuellementTrouve = actuellementTrouve.join("");
}

var chercheMot = function(nbLettres){
	do{
		motATrouver = util.valeurAleatoireDuTableau(tableaux.listeDeMots);
	}while (nbLettres != undefined && motATrouver.length != nbLettres)
}

var getEtatDuJeu = function(message){
	var res = "";
	if (!jeuACommence()){
		res+="Le jeu n'a pas commencé";
		res+= "Pour démarrer une partie de pendu, utilisez **$pendu** ou **$pendu {nombreDeLettres}**.";
	}else{
		res+=getActuel(message)+"\n";
		res+=getLettresDemandees(message)+"\n";
		res+= "Pour jouer au pendu, utilisez **$lettre {lettre}** pour tester une lettre et **$mot {mot}** pour tester un mot. ";
	}
	return res;
}

var getActuel = function(){
	return "Mot à trouver :\n" + affichage.getMot(actuellementTrouve);
}

var getLettresDemandees = function(message){
	if(lettresDemandees.length>0){
		return "Lettres demandées :\n" + affichage.getMot(lettresDemandees.join(""));
	}
	return "";
}

var endGame = function(message){
	if (!jeuACommence()){
		return "La partie n'a pas encore commencé.";
	}
	var reponse = "La partie de pendu est terminée, le mot était " + affichage.getMot(motATrouver) + ", merci d'avoir joué :cookie:";
	motATrouver = undefined;
	actuellementTrouve = undefined;
	lettresDemandees = [];
	return reponse;
}

var testeLettre = function(message){
	if (!jeuACommence()){
		message.channel.send("Désolé, il n'y a actuellement aucun mot à trouver.");
		return 0;
	}

	var messageSplite = message.content.split(" ");
	var etatDuJeu = ""
	if (messageSplite.length < 2){
		etatDuJeu += "Il faut une lettre à tester."
	}else if(messageSplite.length > 2){
		etatDuJeu += "On ne peut tester qu'une lettre à la fois."
	}else{
		var lettreATester = message.content.split(" ")[1];
		if (util.tableauContient(tableaux.alphabet, lettreATester.toLowerCase())){
			var verifie = verifieLettre(lettreATester)
			etatDuJeu +=verifie[0]
			message.react(verifie[1]?"✅":"❌")
		}else{
			etatDuJeu += "On ne peut tester que des lettres."
		}
	}
	etatDuJeu += getEtatDuJeu(message);
	message.channel.send(etatDuJeu);
}

var verifieLettre = function(lettre){
	var resultatString;
	var resultatBool;
	var lettrelc = lettre.toLowerCase();
	if (util.tableauContient(lettresDemandees, lettrelc)){
		return ["La lettre a déjà été demandée", false];
	}
	lettresDemandees.push(lettrelc);
	if (laLettreEstDansLeMotATrouver(lettrelc)) {
		remplaceLettreDansActuel(lettrelc);
		resultatString = "La lettre est dans le mot.\n";
		resultatBool = true;
	}else{
		resultatString = "La lettre n'est pas dans le mot.\n";
		resultatBool = false;
	}
	return [resultatString, resultatBool];
}

var remplaceLettreDansActuel = function(lettrelc){
	var actuelSplite = actuellementTrouve.split("");
	for (var i = 0; i < motATrouver.length; i++) {
		if(motATrouver[i] == lettrelc){
			actuelSplite[i] = lettrelc;
		}
	}
	actuellementTrouve = actuelSplite.join("");
}

var laLettreEstDansLeMotATrouver = function(lettrelc){
	return util.tableauContient(motATrouver, lettrelc);
}

var jeuACommence = function(){
	return motATrouver != undefined;
}

var testeMot = function(message){
	if (!jeuACommence()){
		message.channel.send("Désolé, il n'y a actuellement aucun mot à trouver.");
		return 0;
	}

	var messageSplite = message.content.split(" ");
	var reponse = "";
	if (messageSplite.length < 2){
		reponse += "Il faut un mot à tester."
	}else if(messageSplite.length > 2){
	  reponse += "On ne peut tester qu'un mot à la fois."
	}else{
		var motATester = message.content.split(" ")[1];
		if (motATrouver == motATester){
			reponse += "Félicitation " + message.author + ", tu as trouvé le mot !!\n";
			reponse += endGame(message);
		}else{
			reponse += "Non " + message.author + ", ce n'est pas le bon mot.\n";
			reponse += getEtatDuJeu(message);
		}
	}
	message.channel.send(reponse);
}

module.exports = {
	start: start,
	endGame: endGame,
	testeLettre: testeLettre,
	testeMot: testeMot
}
