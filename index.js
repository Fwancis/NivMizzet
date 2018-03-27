const Discord = require('discord.js')
const bot = new Discord.Client()
const gifs = require('./mes_modules/gifs.js')
const util = require('./mes_modules/utilitaire.js')
const roulette = require('./mes_modules/Roulette/roulette.js')
const prout = require('./mes_modules/prout.js')
const tabs = require('./mes_modules/tableaux.js')
const pendu = require('./mes_modules/Pendu/main.js')

var channels = bot.channels;

var commandes = [
  "$prout",
  "$chaton",
  "$chiot",
  "$ping",
  "$pong",
  "$hug",
  "$roulette",
  "$record",
  "$penduTest",
  "$lettre",
  "$mot",
  "$stopPendu"
]

var sendHelp = function(destinataire){
    destinataire.createDM().then(function(channel){
      channel.send("Salut, voici mes commandes actuellement disponibles :\n"
        + "```\n"
        + "$help => permet de recevoir les commandes disponibles en mp \n"
        + commandes[1] + " => permet d'afficher le gif d''un chaton \n"
        + commandes[2] + " => permet d'affichet le gif d'un chiot \n"
        + commandes[3] + " => renvoie un ping (je sais pas encore lequel ^^) \n"
        + commandes[4] + " => surprise \n"
        + commandes[5] + " {mention} => permet de faire un câlin à {mention} \n"
        + commandes[6] + " => permet de jouer à la roulette russe\n"
        + commandes[7] + " => permet de connaitre son score à la roulette russe\n"
        + commandes[7] + " {mention} => permet de connaitre le score de {mention} à la roulette russe \n"
        + commandes[0] + " => permet de te dire que tu pues \n"
        + commandes[0] + " {mention} => permet de dire à {mention} qu'elle pue \n"
        + commandes[0] + " {mentions} => permet de dire à chaque {mention} de {mentions} qu'elles puent \n"
        + "```\n"
        + "Si tu as une idée d'amélioration, n'hésite pas à en parler à Fwancis, il étudiera ta demande ;)")
    })
}

bot.on('ready', function () {
  bot.user.setActivity("$help")
  console.log("Je suis connecté !")
})

bot.on('message', function(message){
  if (message.content.startsWith(commandes[0])) {
    prout.doProut(message);
  } else if (message.content === commandes[1]){
    message.channel.send(gifs.doChaton(message))
  }else if (message.content === commandes[2]){
    message.channel.send(gifs.doChiot(message))
  }else if(message.content === commandes[3]){
    message.channel.send(bot.ping);
  }else if(message.content === commandes[4]){
    message.reply("Tu as cru quoi ? Que j'allais répondre ping ?");
  }else if(message.content.startsWith(commandes[5])){
    message.channel.send(gifs.doHug(message))
  }else if(message.content === commandes[6]){
    message.reply(roulette.jeuDeLaRoulette(message));
  }else if(message.content.startsWith(commandes[7])){
    roulette.getRecord(message);
  }else if(message.content === "$help"){
    sendHelp(message.author);
  }/*else if(message.content.startsWith("$spam")){
    message.channel.send(message)
  }*/else if(message.content.startsWith(commandes[8])){
    pendu.start(message);
  }else if(message.content.startsWith(commandes[11])){
    pendu.endGame(message);
  }else if(message.content.startsWith("$")){
    message.channel.send("Désolé chouchou, je ne reconnais pas cette commande, tape **$help** pour connaitre mes très (peu) nombreuses commandes.")
  }
})

bot.on('guildMemberAdd', function(member){
  var guildTextChannels = util.getTextChannels(member.guild);
  var message = util.valeurAleatoireDuTableau(tabs.messagesAccueil);
  guildTextChannels[0].send(message[0] + member.id + message[1]);
})

bot.on('emojiCreate', function(emoji){
  var guildTextChannels = util.getTextChannels(emoji.guild);
  var guildGeneral = util.getTextChannelByName(guildTextChannels, "general");
  guildGeneral.send("L'emoji :" + emoji.name +": a vu le jour, soyez gentils avec lui :)");
})

bot.login('NDEyNjM3MDA1MDM0NTUzMzQ0.DWNY8Q.COIHm0iqTU9X57JKyp7DFPwKzEY')
