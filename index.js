const Discord = require('discord.js')
const bot = new Discord.Client()
const gifs = require('./mes_modules/gifs.js')
const util = require('./mes_modules/utilitaire.js')
const roulette = require('./mes_modules/Roulette/roulette.js')
const prout = require('./mes_modules/prout.js')
const tabs = require('./mes_modules/tableaux.js')
const pendu = require('./mes_modules/Pendu/main.js')
const idCreateur = "219911765134278667"

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
  "$pendu",
  "$lettre",
  "$mot",
  "$stopPendu",
  "$test"
]

var sendHelp = function(destinataire){
    destinataire.createDM().then(function(channel){
      channel.send("Salut, voici mes commandes actuellement disponibles :\n"
        + "```php\n"
        + "$help => permet de recevoir les commandes disponibles en mp \n"
        + "\n--------------------------------------------- GIFS ---------------------------------------------\n"
        + commandes[1] + " => \"permet d'afficher le gif d'un chaton \"\n"
        + commandes[2] + " => \"permet d'affichet le gif d'un chiot \"\n"
        + commandes[5] + " {mention} => \"permet de faire un câlin à {mention} \"\n"
        + "\n--------------------------------------------- JEUX ---------------------------------------------\n"
        + "//------------------------Roulette russe------------------------\n"
        + commandes[6] + " => \"permet de jouer à la roulette russe\"\n"
        + commandes[7] + " => \"permet de connaitre son score à la roulette russe\"\n"
        + commandes[7] + " {mention} => \"permet de connaitre le score de {mention} à la roulette russe\"\n"
        + "//------------------------Pendu------------------------\n"
        + commandes[8] + " => \"permet de lancer une partie de pendu\"\n"
        + commandes[8] + " {nombre} => \"permet de lancer une partie de pendu à {nombre} lettres dans le mot. \
Si {nombre} n'est pas un nombre, ou si il est inférieur ou supérieur au nombre de lettres des mots \
dans la base de données, il sera pris au hasard.\"\n"
        + commandes[9] + " => \"permet de tester une lettre au pendu\"\n"
        + commandes[10] + " => \"permet de tester un mot au pendu\"\n"
        + commandes[11] + " => \"permet d'arreter la partie de pendu en cours\"\n"
        + "\n--------------------------------------------- AUTRES ---------------------------------------------\n"
        + commandes[4] + " => \"surprise\"\n"
        + commandes[3] + " => \"renvoie un ping (je sais pas encore lequel ^^)\"\n"
        + commandes[0] + " => \"permet de te dire que tu pues\"\n"
        + commandes[0] + " {mention} => \"permet de dire à {mention} qu'elle pue\"\n"
        + commandes[0] + " {mentions} => \"permet de dire à chaque {mention} de {mentions} qu'elles puent\"\n"
        + "```\n"
        + "Si tu as une idée d'amélioration, n'hésite pas à en parler à son créateur , il étudiera ta demande :wink:")
    })
}

bot.on('ready', function () {
  bot.user.setActivity("$help")
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
  }else if(message.content.startsWith(commandes[8])){
    pendu.start(message);
  }else if(message.content.startsWith(commandes[9])){
    pendu.testeLettre(message);
  }else if(message.content.startsWith(commandes[10])){
    pendu.testeMot(message);
  }else if(message.content.startsWith(commandes[11])){
    message.channel.send(pendu.endGame(message));
  }else if(message.content.startsWith(commandes[12])){
    test(message);
  }else if(message.content.startsWith("$")){
    message.channel.send("Désolé chouchou, je ne reconnais pas cette commande, tape **$help** pour connaitre mes très (peu) nombreuses commandes.")
  }
})

var test = function(message){
  util.test(message);
}

bot.on('guildMemberAdd', function(member){
  var guildTextChannels = util.getTextChannels(member.guild);
  var message = util.valeurAleatoireDuTableau(tabs.messagesAccueil);
  guildTextChannels[0].send(message[0] + member.id + message[1]);
})

bot.on('emojiCreate', function(emoji){
  var guildGeneral = util.getTextChannelByName(emoji.guild, "general");
  guildGeneral.send("L'emoji :" + emoji.name +": a vu le jour, soyez gentils avec lui :)");
})


/*
bot.on('typingStop', function(channel, user){
  channel.send(user + ", on t'a vu !! Tu voulais dire quoi ? :yum:")
})
*/
/*
bot.on('messageUpdate', function(oldMessage, newMessage){
  oldMessage.channel.send(oldMessage.author + " vient de changer \n```\n" +
                        oldMessage.content + "\n```\nen\n```\n" + newMessage.content + "\n```\n");
});
*/

bot.login('NDEyNjM3MDA1MDM0NTUzMzQ0.DWNY8Q.COIHm0iqTU9X57JKyp7DFPwKzEY')
console.log("Je suis connecté !")
