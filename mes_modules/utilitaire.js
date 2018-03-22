var getArgsNotifs = function(args){
  var notifs = []
  for (var i = 0; i < args.length; i++) {
    if (args[i].startsWith("<@")) {
      notifs.push(args[i]);
    }
  }
  return notifs;
}

var valeurAleatoireDuTableau = function(tableau){
  var rand = Math.random();
  var index = Math.floor(rand * (tableau.length));
  return tableau[index];
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

var getTextChannelByName = function(textChannels, channelName){
  var textChannel = [];
  textChannels.forEach(function(channel){
    if (channel.name === channelName) {
      textChannel = channel;
    }
  });
  return textChannel
}

module.exports = {
  getArgsNotifs: getArgsNotifs,
  getTextChannels: getTextChannels,
  getTextChannelByName: getTextChannelByName,
  valeurAleatoireDuTableau: valeurAleatoireDuTableau
}