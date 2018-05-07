const util = require('../utilitaire.js');
const dbRoulette = require("./dbRoulette.js");

var records = {};
var actuels = {};

dbRoulette.initOrOpenDB();

var mute = function(member){
  var roles = member.roles;
  var debutMute = Date.now();
  member.setMute(true, "BANG");
  var memberName = member.nickname!=undefined?member.nickname:member.user.username;
  var guild = member.guild;
  console.log("Fin de la série de roulette de " + memberName  + " dans le serveur " + guild);
  try{
    member.setRoles([util.getGuildRoleByName(guild, "BANG")], "BANG");
  }catch(e){
    member.setRoles([], "BANG");
  }finally{
    setTimeout(function() {
      console.log("J'ai rendu les roles de " + memberName  + " dans le serveur " + guild);
      member.setMute(false, "Fin du BANG");
      member.setRoles(roles, "Fin du BANG");
    }, 30000);
  }
}

var rouletteRusse = function(){
  var rand = Math.random();
  var barillet = Math.floor(rand * 6);
  return barillet == 0;
}

var jeuDeLaRoulette = function(message){
  var reponse;
  channel = message.channel;
  member = message.member;
  if (rouletteRusse()){
    dbRoulette.getRecord(message.guild.id, ""+member.id, metRecordAJour);
    reponse = "BANG";
    mute(member);
  }else{
    actuels[""+member.id] = actuels[""+member.id]==undefined?1:actuels[""+member.id]+1;
    var memberName = member.nickname!=undefined?member.nickname:member.user.username;
    console.log("Série de roulette de " + memberName + " dans le serveur " + member.guild + " en cours. " + actuels[""+member.id]);
    reponse = "Click";
  }
  return reponse
}

var getRecord = function(message){
  var args = message.content.split(' ');
  var notifs = util.getArgsNotifs(args);
  server = message.guild.id;
  channel = message.channel;
  var reponse;
  if (notifs.length == 1){
    var member = notifs[0];
    reponse = dbRoulette.getRecord(server, member.replace("<@", "").replace(">", ""), getTexteRecord);
  }else if (notifs.length > 1){
    channel.send("Désolé, mais la commande **$record** s'emploie **$record** ou **$record {mention}**.");
  }else{
    var member = message.member;
    reponse = dbRoulette.getRecord(server, ""+member.id, getTexteRecord);
  }
}

var metRecordAJour = function(data, member, server){
  if (actuels[member] != undefined) {
    if (data[0] != undefined){
      if (actuels[member] > data[0].record){
        dbRoulette.insert(data[0].server, member, actuels[member]);
      }
    }else{
      dbRoulette.insert(server, member, actuels[member]);
    }
  }
  actuels[member] = 0;
}

var getTexteRecord = function(data, utilisateur, server){
  var reponse;
  if (data[0]==undefined){
    reponse = "<@" + utilisateur + "> n'a pas encore de record ici.";
  }else{
    reponse = "<@" + utilisateur + "> a obtenu un record de " + data[0].record + " à la roulette.";
  }
  channel.send(reponse);
}

var getActuel = function(member){
  return actuels[member];
}

module.exports = {
  jeuDeLaRoulette: jeuDeLaRoulette,
  getRecord: getRecord
}
