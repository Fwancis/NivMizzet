const affichage = require('./affichage.js');
const tableaux = require('../tableaux.js')

var start = function(message){
	message.channel.send("Le jeu du pendu n'est pas opérationnel, merci de patienter.")
}

module.export = {
	start: start
}