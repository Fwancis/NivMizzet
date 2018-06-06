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
  "aide": "$help",
  "chaton": "$chaton",
  "chiot": "$chiot",
  "gif": "$gif",
  "gifTypes": "$gifTypes",
  "hug": "$hug",
  "kiss": "$kiss",
  "lettre": "$lettre",
  "lien": "$lien",
  "mot": "$mot",
  "pendu": "$pendu",
  "ping": "$ping",
  "pong": "$pong",
  "prout": "$prout",
  "record": "$record",
  "roulette": "$roulette",
  "stopPendu": "$stopPendu"
}


var sendHelp = function(destinataire){
    destinataire.createDM().then(function(channel){
      channel.send("Salut, voici mes commandes actuellement disponibles :\n"
        + "```php\n"
        + commandes.aide + " => permet de recevoir les commandes disponibles en mp \n"
        + commandes.lien + " => permet d'avoir le lien permettant d'inviter le bot \n"
        + "\n--------------------------------------------- GIFS ---------------------------------------------\n"
        + commandes.chaton + " => \"permet d'afficher le gif d'un chaton. \"/!\\Va être supprimé !! Utilisez \"$gif chaton\" pour le même effet/!\\\n"
        + commandes.chiot + " => \"permet d'affichet le gif d'un chiot. \"/!\\Va être supprimé !! Utilisez \"$gif chiot\" pour le même effet/!\\\n"
        + commandes.gif + " {type de gif}=> \"permet d'afficher un gif du type indiqué.\"\n"
        + commandes.gifTypes + " => \"permet d'afficher la liste des types de gif actuellement disponibles.\"\n"
        + commandes.hug + " {mention} => \"permet de faire un câlin à {mention}. \"\n"
        + commandes.hug + " {mentions} => \"permet de faire un câlin à toutes les {mentions}. \"\n"
        + commandes.kiss + " {mention} => \"permet de faire un bisou à {mention}. \"\n"
        + commandes.kiss + " {mentions} => \"permet de faire un bisou à toutes les {mentions}. \"\n"
        + "```\n"
      );
      channel.send("```js"
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
      channel.send("```js"
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
  bot.user.setActivity(commandes.aide)
})

bot.on('message', async function(message){
  var commande = message.content.split(" ")[0];
  switch (commande){
    case commandes.aide:
      sendHelp(message.author);
      break;
    case commandes.chaton:
      var chaton = gifs.doChaton(message);
      message.channel.send(chaton[0], chaton[1]);
      break;
    case commandes.chiot:
      var chiot = gifs.doChiot(message);
      message.channel.send(chiot[0], chiot[1]);
      break;
    case commandes.gif:
      message.channel.send(gifs.getGif(message))
      break;
    case commandes.gifTypes:
      message.channel.send(gifs.getGifTypes())
      break;
    case commandes.hug:
      var hug = gifs.doHug(message);
      writeHug(hug, message);
      break;
    case commandes.kiss:
      var hug = gifs.doKiss(message);
      writeHug(hug, message);
      break;
    case commandes.lettre:
      pendu.testeLettre(message);
      break;
    case commandes.lien:
      message.author.createDM().then(function(channel){channel.send("https://discordapp.com/oauth2/authorize?client_id=412637005034553344&scope=bot&permissions=8")});
      break;
    case commandes.mot:
      pendu.testeMot(message);
      break;
    case commandes.pendu:
      pendu.start(message);
      break;
    case commandes.ping:
      const m = await message.channel.send("Ping en calcul... \nVeuillez patienter.");
      m.edit(`Le ping est de ${m.createdTimestamp - message.createdTimestamp}ms. `);
      break;
    case commandes.pong:
      message.reply("Tu as cru quoi ? Que j'allais répondre ping ?");
      break;
    case commandes.prout:
      prout.doProut(message);
      break;
    case commandes.record:
      roulette.getRecord(message);
      break;
    case commandes.roulette:
      message.reply(roulette.jeuDeLaRoulette(message));
      break;
    case commandes.stopPendu:
      message.channel.send(pendu.endGame(message));
      break;
    case "$formule":
      message.channel.send("(Z->)90° - (E-N'W)90°t = 1")
      break;
    case "$test":
      break;
    default:
      if(message.content.startsWith("$")){
        message.channel.send("Désolé chouchou, je ne reconnais pas cette commande, tape **"+commandes.aide+"** pour connaitre mes très (peu) nombreuses commandes.")
      }
      break;
  }
})

var writeHug = function (hug, message){
  if(typeof hug != "string" )
    message.channel.send(hug[0], hug[1])
  else 
    message.channel.send(hug)
}

var test = function(message){
  util.test(message, Discord);
}

bot.on('guildMemberAdd', function(member){
  var guildTextChannels = util.getTextChannels(member.guild);
  var message = util.valeurAleatoireDuTableau(tabs.messagesAccueil);
  guildTextChannels[0].send(message[0] + member.id + message[1]);
})

bot.on('emojiCreate', function(emoji){
  try{
    var guildGeneral = util.getTextChannelByName(emoji.guild, "general");
    guildGeneral.send("L'emoji :" + emoji.name +": a vu le jour, soyez gentils avec lui :)");
  }catch(e){}
})

bot.on("guildCreate", function(guild){
  guild.createRole({
    name: 'BANG'
  })
  .then(role => console.log(`Created new role with name ${role.name}`))
  .catch(console.error)
  console.log("Je viens de rejoindre " + guild.name + ".\n"
    +"Je sers désormais " + bot.guilds.array().length + " serveurs.");
})

bot.on("ready", function(){
  console.log("Je suis connecté à " + bot.guilds.array().length + " serveurs !")
  afficheListeDesGuildes();
})

var afficheListeDesGuildes = function(){
  var tabGuilds = bot.guilds.array();
  var res = "Je suis dans les serveurs nommées : ";
  for (var i = 0; i < tabGuilds.length; i++) {
    res += "\n" + tabGuilds[i];
  }
  console.log(res);
}

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
