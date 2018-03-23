var base = [
  "",
  ""
]

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var messagesAccueil = [
  ["Oh mon dieu !!! <@", "> vient d'arriver !"],
  ["Salut <@", ">, tu veux un cookie ? :cookie:"],
  ["<@", ">, j'espère que yu aimes les paras. :)"],
  ["Désolé <@", ">, je viens de manger le dernier cookie. :grin:"],
  ["Je pense que <@", "> va tous nous sauver."],
  ["Bonjour <@", ">, es-tu un ananas ?"],
  ["Oh non !!! Pas <@", "> !!"],
  ["Voici venir, le temps, des rires et des chants, sur l'île aux <@", "> c'est tous les jours le printemps."],
  ["La légende des temps anciens, <@", ">, vient d'arriver, préparez-vous les mecs."],
  ["Qui est pret pour lapider <@", "> en bonne et due forme ?"],
  ["Salut <@", ">, ça va ?"],
  ["Et ça, les enfants, c'est comment j'ai rencontré <@", ">."],
  ["Serveur !! Je voudrais un <@", "> s'il vous plait."],
  ["Vas-y <@", "> c'est bon !"],
  ["<@", ">, c'est toi qui a volé l'orange du marchand ?"],
  ["Ah mais qui voilà ? Inspecteur <@", "> !! Ça va être la joie, WOUHOU !!"],
  ["<@", ">, vous n'êtes pas juste un simple servant, vous êtes aussi le sosie \
  d'un bulldog en dépressurisation, et c'est un compliment."],
  ["J'me présente, je m'appelle <@", ">. J'voudrais bien, réussir ma vie."],
  ["Hotel Gudural, 7 étoiles de la place Elister Donovan, du groupe Franky Motel fondé en 2001, \
  budget Slip Tranquille rattaché Suisse, France et Belgique. Formule petit déjeuner : \"pain, céréales, sucrés, salés, \
  moutarde et miel\", menu Riviera Transatlantique à partir de 11€, satellite et câble contact fixe et large \
  choix d’infusion tisane et café, numéro de SIRET 790778815-015, SARL au capital de 150 000 boules, passoires en \
  marbre et les baldaquins à matelas à mémoire de forme, accès limite à la WiFi, gouttières en zinc et tuiles en terre \
  glaise, oreiller pur laine avec intérieur coton, moquette « Aux 4 Murailles » ignifugée garanti sans paraben colorant \
  ni conservateur, bâtiment sous vidéo-surveillance H24, partenaire aux Jeux Olympiques d’Hiver de Vancouver au Canada en \
  2009, premier prix de la Literie du Salon du Sommeil en 1995, lauréat du concours de la meilleure Piaule sans vis-à-vis \
  exposée plein sud avec double rideaux dont deux sont en daim, établissement quasi homologué, centre de thalassothérapie, \
  remise en forme soin corps et visage formule antipelliculaire, abdos SQUAT et tractions, ensuite sélecte ta connexion, \
  quand elle danse elle me fait perdre la raison boom boom she boom total reggae salsa calipso, la maintenance du \
  distributeur de canettes est assurée  par une société du GERS et non-agréée et par la SRCT, c’est comme la mangouste \
  l’animal mais sans le U le I le A le E, la maison n’accepte ni chèque ni troc ni peau ni fourrure mais espèces et \
  carte bleue, nos bâtiments sont tous désamiantés, les rats sont nourris, les draps sont lavés, notre équipe est soudée \
  et l’herbe coupée récemment ramassée que puis-je pour <@", "> ?"],
  ["$hug <@", ">"]
]

var hugs = [
  "https://giphy.com/gifs/love-disney-girl-EvYHHSntaIl5m",
  "https://giphy.com/gifs/love-hug-monkey-42YlR8u9gV5Cw",
  "https://giphy.com/gifs/hug-cat-cute-f6y4qvdxwEDx6",
  "https://giphy.com/gifs/kawaii-hug-sending-a-l4FGpP4lxGGgK5CBW",
  "https://giphy.com/gifs/hug-sixt-calin-iBezUAUnAuiu4",
  "https://www.tenor.co/sTX2.gif",
  "https://www.tenor.co/vfFx.gif",
  "https://www.tenor.co/EHAi.gif",
  "https://www.tenor.co/KtZl.gif",
  "https://giphy.com/gifs/head-hug-pats-Lp6T9KxDEgsWA",
  "https://giphy.com/gifs/dog-hug-SB5fjrUhAeLte",
  "https://giphy.com/gifs/dog-hug-DtJw1cqMCHSvu",
  "https://giphy.com/gifs/lion-hugs-Pe0EtLtzCi2nS",
  "https://giphy.com/gifs/cat-love-cute-NimEavznszKtW",
  "https://www.tenor.co/L4M1.gif",
  "https://www.tenor.co/vt8m.gif",
  "https://www.tenor.co/NAYZ.gif",
  "https://www.tenor.co/udHD.gif",
  "https://www.tenor.co/GaeQ.gif",
  "https://www.tenor.co/yHIe.gif",
  "https://www.tenor.co/vNRM.gif",
  "https://giphy.com/gifs/snuggle-bNBAQpqb4MSnS",
  "https://giphy.com/gifs/nowthisnews-animal-otter-otters-FlDfliuA2kOju",
  "https://www.tenor.co/QS0C.gif",
  "https://giphy.com/gifs/love-kiss-L1icatkT4ECAg",
  "https://www.tenor.co/oJNa.gif",
  "https://giphy.com/gifs/hug-panda-AUH9ZcqsviV32",
  "https://giphy.com/gifs/black-and-white-cute-YD16te5amnpRu",
  "https://giphy.com/gifs/kiss-animal-ZhXaeQIkcKcFi",
  "https://giphy.com/gifs/panda-sleeping-NDIT8BbVifFeM",
  "https://giphy.com/gifs/panda-hugging-IQkpMxsNXVYfC",
  "https://giphy.com/gifs/hug-love-winnie-the-pooh-llmZp6fCVb4ju",
  "https://giphy.com/gifs/love-hug-monkey-42YlR8u9gV5Cw",
  "https://giphy.com/gifs/love-cute-hug-xT39CXg70nNS0MFNLy",
  "https://giphy.com/gifs/love-sexy-hug-yG79QhdxXMtEc"
]

var chatons = [
  "https://giphy.com/gifs/wrestling-kitty-11hKUEMqvFVHwI",
  "https://giphy.com/gifs/hVo53jMWiR6Kc",
  "https://giphy.com/gifs/kitty-hello-Fv0Pyh28afIK4",
  "https://giphy.com/gifs/adorable-kitten-puppy-B1M2bskCzSpR6",
  "https://giphy.com/gifs/adorable-kitten-kitty-r2IgVrJGNolAA",
  "https://giphy.com/gifs/cat-baby-kawaii-FrEnONcaBGJ0c",
  "https://giphy.com/gifs/cat-adorable-109TWWxRddcIEg",
  "https://giphy.com/gifs/cat-love-smile-1FkCqpyObTuo0",
  "https://giphy.com/gifs/cat-adorable-kitten-YxquUcNoXaAIE",
  "https://giphy.com/gifs/cat-kitten-kitty-aNd7P8ElIcOXK",
  "https://giphy.com/gifs/adorable-morning-humour-A0aEq3RE7OFbi",
  "https://giphy.com/gifs/cat-kitten-kitty-htmhQ6M1mVOw0",
  "https://giphy.com/gifs/happy-sweet-lovely-34cKaVDbeNp1C",
  "https://giphy.com/gifs/TH0MckLHTN0YM",
  "https://giphy.com/gifs/6olUm4MR6RZ3W",
  "https://giphy.com/gifs/chat-14v0b6U1vucP1m",
  "https://giphy.com/gifs/le-stress-passer-miDx5gJ7ZhdSg",
  "https://giphy.com/gifs/funny-seor-IAsORlEAdKVIk",
  "https://www.tenor.co/Hzoq.gif",
  "https://www.tenor.co/LZOF.gif",
  "https://www.tenor.co/Mjso.gif",
  "https://www.tenor.co/oJlM.gif",
  "https://www.tenor.co/MQNg.gif",
  "https://www.tenor.co/xshA.gif",
  "https://www.tenor.co/xz4f.gif",
  "https://www.tenor.co/xMQk.gif",
  "https://www.tenor.co/o63S.gif",
  "https://www.tenor.co/sPu9.gif",
  "https://www.tenor.co/NcBq.gif",
  "https://www.tenor.co/OXNr.gif"
]

var chiots = [
  "https://giphy.com/gifs/puppy-burrito-dog-FOL5mK0tXUmXe",
  "https://giphy.com/gifs/puppy-dog-run-gxxlowyvtfS0M",
  "https://giphy.com/gifs/animals-being-jerks-hope-seat-wqb5K5564JSlW",
  "https://giphy.com/gifs/puppy-4nGYmLsCoHNXa",
  "https://giphy.com/gifs/hey-11pcVChYyrd1a8",
  "https://giphy.com/gifs/puppy-bed-1TmrEqADCCCS4",
  "https://giphy.com/gifs/dog-puppies-cuties-EpadSCtvaZ73i",
  "https://giphy.com/gifs/dog-roll-over-P87onb6sRx4K4",
  "https://giphy.com/gifs/Sofinco-l1J9FiJzykshjePiU",
  "https://giphy.com/gifs/cute-animal-JRwY95ChpnAMo",
  "https://giphy.com/gifs/cute-dog-animal-R67DVI47ZetFu",
  "https://giphy.com/gifs/puppy-dog-tP3Tu61F2RBZe",
  "https://giphy.com/gifs/pauvrepetitchiot-jeRRhab1IBJcI",
  "https://giphy.com/gifs/shiba-aVu4KgHEVFG1i",
  "https://giphy.com/gifs/eyebleach-pupper-bananer-if92hsIZWLoWc",
  "https://www.tenor.co/AcIC.gif",
  "https://www.tenor.co/MpfR.gif",
  "https://www.tenor.co/KQrq.gif",
  "https://www.tenor.co/r5EM.gif",
  "https://www.tenor.co/ssv8.gif",
  "https://www.tenor.co/rO1k.gif",
  "https://www.tenor.co/vtFP.gif",
  "https://www.tenor.co/uhKr.gif",
  "https://www.tenor.co/wOhv.gif",
  "https://www.tenor.co/uXCr.gif",
  "https://www.tenor.co/uXCr.gif",
  "https://www.tenor.co/ODbE.gif",
  "https://www.tenor.co/FS0R.gif",
  "https://www.tenor.co/EqMU.gif",
  "https://www.tenor.co/o63Z.gif"
]

module.exports = {
  hugs: hugs,
  chatons: chatons,
  chiots: chiots,
  messagesAccueil: messagesAccueil,
  alphabet: alphabet
}
