const util = require('./utilitaire.js');
const tabs = require('./tableaux.js');

var getHugs = function(notifies, auteur){
  var message = "" + notifies[0]
  for (var i = 1; i < notifies.length-1; i++) {
    message += ", " + notifies[i];
  }
  message += " et " + notifies[notifies.length-1] + ", " + auteur + " vous fait un gros câlin !! \n" + util.valeurAleatoireDuTableau(tabs.hugs);
  return message;
}

var doHug = function(message){
  var reponse;
  var args = message.content.split(' ');
  var notifs = util.getArgsNotifs(args);
  if (notifs.length == 1){
    reponse = notifs[0] + ", " + message.author + " te fait un gros câlin !! \n" + util.valeurAleatoireDuTableau(tabs.hugs);
  }else if (notifs.length > 1){
    reponse = getHugs(notifs, message.author);
  }else{
    reponse = "désolé, mais la commande **$hug** s'emploie **$hug {mention}**.";
  }
  return reponse;
}

var doChaton = function(message){
  return util.valeurAleatoireDuTableau(tabs.chatons);
}

var doChiot = function(message){
  return util.valeurAleatoireDuTableau(tabs.chiots);
}

module.exports = {
  doHug: doHug,
  doChaton: doChaton,
  doChiot: doChiot
}