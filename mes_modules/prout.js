const util = require('./utilitaire.js');

var doProut = function(message){
  var args = message.content.split(' ');
  var notifs = util.getArgsNotifs(args);
  if (notifs.length == 1){
    message.channel.send("Tu pues " + notifs[0] + " ! \nSigné : " + message.author);
  }else if (notifs.length >1){
    var reponse = getMultiProut(notifs, message.author);
    message.channel.send(reponse);
  }else{
    message.reply(", tu pues ! ");
  }
}

var getMultiProut = function(notifies, auteur){
  var message = "Vous puez " + notifies[0]
  for (var i = 1; i < notifies.length-1; i++) {
    message += ", " + notifies[i];
  }
  message += " et " + notifies[notifies.length-1] + " ! \nSigné : " + auteur;
  return message;
}

module.exports = {
  doProut: doProut
}