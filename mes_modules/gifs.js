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
  return [reponse, getGifFromfolder("hug")];
}

var doChaton = function(message){
  return getGifFromfolder("chaton");
}

var doChiot = function(message){
  return getGifFromfolder("chiot");
}

var getGifFromfolder = function(gifToGet){
  var gifFolder = "./mes_modules/gifs/" + gifToGet + "/";
  var tabGifs = fs.readdirSync(gifFolder);
  var gif = gifFolder + util.valeurAleatoireDuTableau(tabGifs);
  var attachment = new Discord.Attachment(gif);
  return attachment;
}

var getGifTypes = function(){
  var gifTypeFolder = "./mes_modules/gifs/";
  var tabTypesGif = fs.readdirSync(gifTypeFolder);
  var reponse = "Les types de gif sont : \n```";
  reponse += getTabElements(tabTypesGif) + "```";
  return reponse;
}

var getTabElements = function(tab){
  var reponse = "";
  for (var i = 0; i < tab.length; i++) {
    reponse += tab[i] + "\n";
  }
  return reponse;
}

var getGif = function(message){
  var args = message.content.split(' ');
  if (args.length != 2){
    return "Désolé " + message.author + ", mais la commande **$gif** s'emploie avec le type de gif que tu désires.";
  }
  try{
    return getGifFromfolder(args[1]);
  }catch(e){
    return "Aucun gif n'a été trouvé avec cette valeur."
  }
}

var doPinkie = function(message){
  return getGifFromfolder("Pinkie");
}

module.exports = {
  doHug: doHug,
  doChaton: doChaton,
  doChiot: doChiot,
  doPinkie: doPinkie,
  getGif: getGif,
  getGifTypes: getGifTypes
}
