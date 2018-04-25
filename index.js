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

var commandes = {
  "prout": "$prout",
  "chaton": "$chaton",
  "chiot": "$chiot",
  "ping": "$ping",
  "pong": "$pong",
  "hug": "$hug",
  "roulette": "$roulette",
  "record": "$record",
  "pendu": "$pendu",
  "lettre": "$lettre",
  "mot": "$mot",
  "stopPendu": "$stopPendu",
  "gif": "$gif",
  "gifTypes": "$gifTypes"
}


var sendHelp = function(destinataire){
    destinataire.createDM().then(function(channel){
      channel.send("Salut, voici mes commandes actuellement disponibles :\n"
        + "```php\n"
        + "$help => permet de recevoir les commandes disponibles en mp \n"
        + "\n--------------------------------------------- GIFS ---------------------------------------------\n"
        + commandes.chaton + " => \"permet d'afficher le gif d'un chaton. \"/!\\Va être supprimé !! Utilisez \"$gif chaton\" pour le même effet/!\\\n"
        + commandes.chiot + " => \"permet d'affichet le gif d'un chiot. \"/!\\Va être supprimé !! Utilisez \"$gif chiot\" pour le même effet/!\\\n"
        + commandes.hug + " {mention} => \"permet de faire un câlin à {mention}. \"\n"
        + commandes.gif + " {type de gif}=> \"permet d'afficher un gif du type indiqué.\"\n"
        + commandes.gifTypes + " => \"permet d'afficher la liste des types de gif actuellement disponibles.\"\n"
        + "```\n"
      );
      channel.send("```"
        + "\n--------------------------------------------- JEUX ---------------------------------------------\n"
        + "//------------------------Roulette russe------------------------\n"
        + commandes.roulette + " => \"permet de jouer à la roulette russe.\"\n"
        + commandes.record + " => \"permet de connaitre son score à la roulette russe.\"\n"
        + commandes.record + " {mention} => \"permet de connaitre le score de {mention} à la roulette russe.\"\n"
        + "//------------------------Pendu------------------------\n"
        + commandes.pendu + " => \"permet de lancer une partie de pendu.\"\n"
        + commandes.pendu + " {nombre} => \"permet de lancer une partie de pendu à {nombre} lettres dans le mot. \
Si {nombre} n'est pas un nombre, ou si il est inférieur ou supérieur au nombre de lettres des mots \
dans la base de données, il sera pris au hasard.\"\n"
        + commandes.lettre + " => \"permet de tester une lettre au pendu.\"\n"
        + commandes.mot + " => \"permet de tester un mot au pendu.\"\n"
        + commandes.stopPendu + " => \"permet d'arreter la partie de pendu en cours.\"\n"
        + "```\n"
      );
      channel.send("```"
        + "\n--------------------------------------------- AUTRES ---------------------------------------------\n"
        + commandes.ping + " => \"renvoie le ping entre le bot et l'utilisateur.\"\n"
        + commandes.pong + " => \"surprise !!\"\n"
        + commandes.prout + " => \"permet de te dire que tu pues.\"\n"
        + commandes.prout + " {mention} => \"permet de dire à {mention} qu'elle pue.\"\n"
        + commandes.prout + " {mentions} => \"permet de dire à chaque {mention} de {mentions} qu'elles puent.\"\n"
        + "```\n"
        + "Si tu as une idée d'amélioration, n'hésite pas à en parler à mon créateur, il étudiera ta demande. :wink:")
    })
}

bot.on('ready', function () {
  bot.user.setActivity("$help")
})

bot.on('message', async function(message){
  var commande = message.content.split(" ")[0];
  switch (commande){
    case commandes.prout:
      prout.doProut(message);
      break;
    case commandes.chaton:
      message.channel.send(gifs.doChaton(message))
      break;
    case commandes.chiot:
      message.channel.send(gifs.doChiot(message))
      break;
    case commandes.ping:
      const m = await message.channel.send("Ping en calcul... \nVeuillez patienter.");
      m.edit(`Le ping est de ${m.createdTimestamp - message.createdTimestamp}ms. `);
      break;
    case commandes.pong:
      message.reply("Tu as cru quoi ? Que j'allais répondre ping ?");
      break;
    case commandes.hug:
      var hug = gifs.doHug(message);
      message.channel.send(hug[0], hug[1])
      break;
    case commandes.roulette:
      message.reply(roulette.jeuDeLaRoulette(message));
      break;
    case commandes.record:
      roulette.getRecord(message);
      break;
    case commandes.pendu:
      pendu.start(message);
      break;
    case commandes.lettre:
      pendu.testeLettre(message);
      break;
    case commandes.mot:
      pendu.testeMot(message);
      break;
    case commandes.stopPendu:
      message.channel.send(pendu.endGame(message));
      break;
    case commandes.gif:
      message.channel.send(gifs.getGif(message))
      break;
    case commandes.gifTypes:
      message.channel.send(gifs.getGifTypes())
      break;
    case "$formule":
      message.channel.send("(Z->)90° - (E-N'W)90°t = 1")
      break;
    case "$help":
      sendHelp(message.author);
      break;
    case "$test":
      break;
    default:
      if(message.content.startsWith("$")){
        message.channel.send("Désolé chouchou, je ne reconnais pas cette commande, tape **$help** pour connaitre mes très (peu) nombreuses commandes.")
      }
      break;
  }
})

var test = function(message){
  util.test(message, Discord);
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
