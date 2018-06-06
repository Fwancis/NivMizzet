const Discord = require('discord.js');
const fs = require("fs");
const util = require('./utilitaire.js');
const tabs = require('./tableaux.js');

var getHugs = function(notifies, auteur){
  var message = util.getNotifiesString(notifies) + ", " + auteur + " vous fait un gros câlin !! \n";
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
    reponse = "Désolé, mais la commande **$hug** s'emploie **$hug {mention}**.";
    return reponse;
  }
  return [reponse, getGifFromfolder("hug")];
}

var getKisses = function(notifies, auteur){
  var message = util.getNotifiesString(notifies) + ", " + auteur + " vous fait un gros bisou !! \n";
  return message;
}

var doKiss = function(message){
  var reponse;
  var args = message.content.split(' ');
  var notifs = util.getArgsNotifs(args);
  if (notifs.length == 1){
    reponse = notifs[0] + ", " + message.author + " te fait un gros bisou !! \n";
  }else if (notifs.length > 1){
    reponse = getKisses(notifs, message.author);
  }else{
    reponse = "Désolé, mais la commande **$kiss** s'emploie **$kiss {mention}**.";
    return reponse;
  }
  return [reponse, getGifFromfolder("kiss")];
}

var doChaton = function(message){
  return ["Attention, cette commande va disparaitre, utilisez **$gif chaton** pour le même résultat.", getGifFromfolder("chaton")];
}

var doChiot = function(message){
  return ["Attention, cette commande va disparaitre, utilisez **$gif chiot** pour le même résultat.", getGifFromfolder("chiot")];
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
    return "Désolé " + message.author + ", mais la commande **$gif** s'emploie "
    + "avec le type de gif que tu désires. Pour avoir la liste des types "
    + "actuels, utilise ***$gifTypes***.";
  }
  if (args[1].includes("..")){
    return "Il est formellement interdit d'explorer les fichiers à l'aide de cette commande, utilise un type préexistant !!";
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
  doKiss: doKiss,
  doChaton: doChaton,
  doChiot: doChiot,
  doPinkie: doPinkie,
  getGif: getGif,
  getGifTypes: getGifTypes
}
