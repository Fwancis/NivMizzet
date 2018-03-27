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
	message.channel.send("Le jeu du pendu n'est pas opérationnel, merci de patienter.")
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

var afficheActuel = function(message){
	message.channel.send(affichage.getMot(actuellementTrouve));
}

var endGame = function(message){
	motATrouver = undefined;
	actuellementTrouve = undefined;
	nbLettres = undefined;
	lettresDemandees = [];
	message.channel.send("La partie de pendu est terminée, merci d'avoir joué :cookie:");
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
		if (tableaux.alphabet.includes(lettreATester.toLowerCase())){
			message.channel.send("Je suis sensé tester si " + lettreATester + " est dans le mot à trouver.")
		}else{
			message.channel.send("On ne peut tester que des lettres.")
		}
	}
}

var jeuACommence = function(){
	return motATrouver != undefined;
}

module.exports = {
	start: start,
	endGame: endGame
}
