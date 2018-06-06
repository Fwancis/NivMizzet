var entierAléatoireEntre = function (min, max){
  return Math.floor(Math.random()*((max-min)+1)+min);
}

var getArgsNotifs = function(args){
  var notifs = []
  for (var i = 0; i < args.length; i++) {
    if (args[i].startsWith("<@") || args[i]=="@everyone" || args[i]=="@here") {
      notifs.push(args[i]);
    }
  }
  return notifs;
}

var getIndexOfArrayElement = function(array, element){
  return array.map().indexOf(element);
}

var getGuildRoleByName = function(guild, name){
  var roles = guild.roles.array();
  var roleFound;
  var i = 0;
  while (!roleFound && i<roles.length){
    if (roles[i].name == name){
      roleFound = roles[i];
    }
    i++;
  }
  return roleFound;
}

var getNotifiesString = function(notifies){
  var message = "" + notifies[0]
  for (var i = 1; i < notifies.length-1; i++) {
    message += ", " + notifies[i];
  }
  message += " et " + notifies[notifies.length-1];
  return message;
}

var getTextChannels = function(guild){
  var textChannels = [];
  var channels = guild.channels;
  channels.forEach(function(channel){
    if (channel.type === "text" && channel.guild == guild) {
      textChannels.push(channel);
    }
  });
  return textChannels;
}

var getTextChannelByName = function(guild, channelName){
  var textChannels = getTextChannels(guild);
  var textChannel = [];
  textChannels.forEach(function(channel){
    if (channel.name === channelName) {
      textChannel = channel;
    }
  });
  return textChannel
}

var isOwner = function(guild, member){
  console.log(guild.ownerID == member.id);
}

var tableauContient = function(tableau, valeur){
  return tableau.includes(valeur);
}

var valeurAleatoireDuTableau = function(tableau){
  var index = entierAléatoireEntre(0, tableau.length-1);
  return tableau[index];
}

var test = function(message){
  message.channel.send("Désolé chouchou, je ne reconnais pas cette commande, tape **$help** pour connaitre mes très (peu) nombreuses commandes.")
}

module.exports = {
  entierAléatoireEntre: entierAléatoireEntre,
  getArgsNotifs: getArgsNotifs,
  getIndexOfArrayElement: getIndexOfArrayElement,
  getGuildRoleByName: getGuildRoleByName,
  getNotifiesString: getNotifiesString,
  getTextChannels: getTextChannels,
  getTextChannelByName: getTextChannelByName,
  isOwner: isOwner,
  tableauContient: tableauContient,
  valeurAleatoireDuTableau: valeurAleatoireDuTableau,
  test: test
}
