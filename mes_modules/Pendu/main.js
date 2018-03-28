const affichage = require('./affichage.js');
const tableaux = require('../tableaux.js');
const util = require('../utilitaire.js');

var motATrouver;
var actuellementTrouve;
var nbLettres;
var lettresDemandees = [];

const nbLettresMin = 3;
const nbLettresMax = 3;

var start = function(message){
	if (jeuACommence()){
		message.channel.send("Il y a déjà un mot à trouver");
		afficheActuel(message);
	}else{
		initGame(message);
		message.channel.send("Le mot à trouver a été défini. Il contient " + nbLettres + " lettres.")
		afficheActuel(message);
	}
	message.channel.send("Pour jouer au pendu, utilisez **$lettre {lettre}** pour tester une lettre et **$mot {mot}** pour tester un mot. ");
}

var initGame = function(message){
	var messageSplite = message.content.split(" ");
	if (messageSplite.length > 1){
		nbLettres = parseInt(messageSplite[1]);
		if (typeof nbLettres != "number" || nbLettres < nbLettresMin || nbLettres > nbLettresMax) {
			nbLettres = util.entierAléatoireEntre(nbLettresMin, nbLettresMax);
		}
	}else{
		nbLettres = util.entierAléatoireEntre(nbLettresMin, nbLettresMax);
	}
	nbLettres = Math.floor(nbLettres);
	startGame();
}

var startGame = function(){
	actuellementTrouve = []
	for (var i = 0; i < nbLettres; i++) {
		actuellementTrouve[i] = " ";
	}
	actuellementTrouve = actuellementTrouve.join("");
	motATrouver = util.valeurAleatoireDuTableau(tableaux.listeDeMots[nbLettres-nbLettresMin]);
}

var afficheEtatDuJeu = function(message){
	if (!jeuACommence()){
		message.channel.send("Le jeu n'a pas commencé");
	}else{
		afficheActuel(message);
		afficheLettresDemandees(message);
	}
	message.channel.send("Pour jouer au pendu, utilisez **$lettre {lettre}** pour tester une lettre et **$mot {mot}** pour tester un mot. ");
}

var afficheActuel = function(message){
	message.channel.send("Mot à trouver :\n" + affichage.getMot(actuellementTrouve));
}

var afficheLettresDemandees = function(message){
	if(lettresDemandees.length>0){
		message.channel.send("Lettres demandées :\n" + affichage.getMot(lettresDemandees.join("")));
	}
}

var endGame = function(message){
	if (!jeuACommence()){
		message.channel.send("La partie n'a pas encore commencé.")
		return 0;
	}
	message.channel.send("La partie de pendu est terminée, le mot était \"" + motATrouver + "\", merci d'avoir joué :cookie:");
	motATrouver = undefined;
	actuellementTrouve = undefined;
	nbLettres = undefined;
	lettresDemandees = [];
}

var testeLettre = function(message){
	if (!jeuACommence()){
		message.channel.send("Désolé, il n'y a actuellement aucun mot à trouver.");
		return 0;
	}

	var messageSplite = message.content.split(" ");
	if (messageSplite.length < 2){
		message.channel.send("Il faut une lettre à tester.")
	}else if(messageSplite.length > 2){
		message.channel.send("On ne peut tester qu'une lettre à la fois.")
	}else{
		var lettreATester = message.content.split(" ")[1];
		if (util.tableauContient(tableaux.alphabet, lettreATester.toLowerCase())){
			message.channel.send(verifieLettre(lettreATester));
			afficheEtatDuJeu(message);
		}else{
			message.channel.send("On ne peut tester que des lettres.")
		}
	}
}

var verifieLettre = function(lettre){
	var resultat;
	var lettrelc = lettre.toLowerCase();
	if (util.tableauContient(lettresDemandees, lettrelc)){
		return "La lettre a déjà été demandée";
	}
	lettresDemandees.push(lettrelc);
	if (laLettreEstDansLeMotATrouver(lettrelc)) {
		remplaceLettreDansActuel(lettrelc);
		resultat = "La lettre est dans le mot."
	}else{
		resultat = "La lettre n'est pas dans le mot.";
	}
	return resultat;
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
	if (messageSplite.length < 2){
		message.channel.send("Il faut un mot à tester.")
	}else if(messageSplite.length > 2){
		message.channel.send("On ne peut tester qu'un mot à la fois.")
	}else{
		var motATester = message.content.split(" ")[1];
		if (motATrouver == motATester){
			message.channel.send("Félicitation " + message.author + ", tu as trouvé le mot !!");
			endGame(message);
		}else{
			message.channel.send("Non " + message.author + ", ce n'est pas le bon mot.");
			afficheEtatDuJeu(message);
		}
	}
}

module.exports = {
	start: start,
	endGame: endGame,
	testeLettre: testeLettre,
	testeMot: testeMot
}
