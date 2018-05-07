var getArgsNotifs = function(args){
  var notifs = []
  for (var i = 0; i < args.length; i++) {
    if (args[i].startsWith("<@") || args[i]=="@everyone" || args[i]=="@here") {
      notifs.push(args[i]);
    }
  }
  return notifs;
}

var test = function(message){
  message.channel.send("Désolé chouchou, je ne reconnais pas cette commande, tape **$help** pour connaitre mes très (peu) nombreuses commandes.")
}

var isOwner = function(guild, member){
  console.log(guild.ownerID == member.id);
}

var valeurAleatoireDuTableau = function(tableau){
  var index = entierAléatoireEntre(0, tableau.length-1);
  return tableau[index];
}

var entierAléatoireEntre = function (min, max){
  return Math.floor(Math.random()*((max-min)+1)+min);
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

var tableauContient = function(tableau, valeur){
  return tableau.includes(valeur);
}

var getIndexOfArrayElement = function(array, element){
  return array.map().indexOf(element);
}

module.exports = {
  getArgsNotifs: getArgsNotifs,
  getTextChannels: getTextChannels,
  getTextChannelByName: getTextChannelByName,
  valeurAleatoireDuTableau: valeurAleatoireDuTableau,
  entierAléatoireEntre: entierAléatoireEntre,
  tableauContient: tableauContient,
  getIndexOfArrayElement: getIndexOfArrayElement,
  isOwner: isOwner,
  getGuildRoleByName: getGuildRoleByName,
  test: test
}
