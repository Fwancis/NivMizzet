const Discord = require('discord.js');
const fs = require("fs");
const util = require('./utilitaire.js');
const tabs = require('./tableaux.js');

var getHugs = function(notifies, auteur){
  var message = "" + notifies[0]
  for (var i = 1; i < notifies.length-1; i++) {
    message += ", " + notifies[i];
  }
  message += " et " + notifies[notifies.length-1] + ", " + auteur + " vous fait un gros câlin !! \n";
  return message;
}

var doHug = function(message){
  var reponse;
  var args = message.content.split(' ');
  var notifs = util.getArgsNotifs(args);
  if (notifs.length == 1){
    reponse = notifs[0] + ", " + message.author + " te fait un gros câlin !! \n";
  }else if (notifs.length > 1){
    reponse = getHugs(notifs, message.author);
  }else{
    reponse = "désolé, mais la commande **$hug** s'emploie **$hug {mention}**.";
  }
  return [reponse, getGif("hug")];
}

var doChaton = function(message){
  return getGif("chaton");
}

var doChiot = function(message){
  return getGif("chiot");
}

var getGif = function(gifToGet){
  var gifFolder = "./mes_modules/gifs/" + gifToGet + "/";
  var tabGifs = fs.readdirSync(gifFolder);
  var gif = gifFolder + util.valeurAleatoireDuTableau(tabGifs);
  var attachment = new Discord.Attachment(gif);
  return attachment;
}

var doPinkie = function(message){
  return getGif("Pinkie");
}

module.exports = {
  doHug: doHug,
  doChaton: doChaton,
  doChiot: doChiot,
  doPinkie: doPinkie
}
