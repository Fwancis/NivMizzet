var base = [
  "",
  ""
]

var listeDeMots = [
    "ail", "axe",
    "bar", "boa", "ble", "bel", "but", "bus", "bol",
    "cil", "ces", "cle",
    "des", "don", "dot", "dur",
    "ere", "epi", "ego", "ete",
    "fee", "fer", "feu", "fou",
    "gai", "gay", "gaz",
    "ile", "ire",
    "jet",
    "les", "lin", "loi", "lot", "lui",
    "mal", "mat", "mec", "mer", "mes", "moi", "mon", "mou", "mue", "mur",
    "nef", "net", "nez", "nid", "nom", "non", "nul",
    "ode", "ohm", "oie", "oui",
    "par", "pas", "pet", "peu", "pic", "pie", "pif", "pin", "pie", "pot",
    "pou", "pro", "pur", "pub", "pus",
    "rap", "ras", "rat", "riz", "roi", "rot", "rue", "rut",
    "sac", "sec", "sel", "ses", "six", "ski", "soi", "sol", "son", "sot",
    "sou", "suc", "sud", "sur", "sus",
    "tes", "the", "tir", "toc", "toi", "ton", "tot", "tri",
    "une", "uni",
    "val", "vin", "vie", "vol", "vue",
    "yak",  "yen", "yin",
    "zen", "zoo",
    "abat", "abbe", "abri", "abus", "acne", "acre", "acte", "ados", "afin", "afro",
    "ages", "agir", "aide", "aigu", "aile", "ails", "aine", "aire", "aise", "alea",
    "alpe", "alto", "alun", "amas", "amer", "ames", "amie", "amis", "anal", "anes",
    "ange", "anis", "anse", "anus", "aout", "apre", "apte", "aras", "arcs", "ardu",
    "aria", "arme", "arts", "atre", "aube", "auge", "aura", "auto", "aval", "avec",
    "aveu", "avis", "axer", "axes", "azur",
    "bacs", "baie", "bail", "bain", "bals", "banc", "bars", "base", "baux", "bave",
    "beas", "beat", "beau", "bebe", "becs", "bide", "bien", "bile", "bise", "bite",
    "bits", "bled", "bles", "bleu", "bloc", "boas", "bobo", "bobs", "bols", "bond",
    "bons", "bord", "boss", "bots", "bouc", "boue", "bout", "boxe", "bras", "brie",
    "bris", "brin", "brio", "brun", "buee", "buse", "bute",
    "caca", "cadi", "cafe", "cage", "caid", "came", "camp", "cane", "cape", "case",
    "ceci", "cela", "cene", "cent", "cepe", "cerf", "ceux", "char", "chat", "chef",
    "cher", "chez", "chic", "choc", "chou", "chut", "ciel", "cils", "cine", "cinq",
    "cire", "clan", "clef", "cles", "clic", "clip", "clos", "clou", "club", "coco",
    "cocu", "code", "coin", "coit", "cols", "colt", "coma", "cone", "cons", "coqs",
    "cors", "cote", "coup", "cour", "cout", "cran", "cric", "crin", "cube", "cuir",
    "culs", "cure", "cuve", "cyan",
    "daim", "dais", "dame", "dans", "dard", "date", "decu", "defi", "deja", "dela",
    "demi", "deni", "dent", "deux", "dico", "dieu", "dime", "dire", "diva", "dock",
    "dodo", "dodu", "doge", "dome", "donc", "dons", "dont", "dope", "dose", "dots",
    "doux", "drap", "ducs", "duel", "dune", "duos", "dure", "durs",
    "eaux", "ebat", "echo", "ecus", "edit", "egal", "elan", "elfe", "elle", "elue",
    "elus", "emeu", "emir", "emoi", "emue", "emus", "eons", "epee", "epis", "eres",
    "etal", "etat", "etau", "etes", "etre", "etui", "euro", "exil",
    "face", "fade", "faim", "faon", "faux", "feal", "fees", "fers", "fete", "feux",
    "feve", "feif", "fier", "film", "fils", "fine", "fins", "fion", "fisc", "fixe",
    "flan", "flic", "flop", "flot", "flou", "flux", "foie", "foin", "fois", "folc",
    "fond", "foot", "fort", "four", "fous", "frai" ,"fret", "fric", "froc", "fuel",
    "fuir", "fute", "futs",
    "gage", "gags", "gaie", "gain", "gais", "gala", "gang", "gant", "gare", "gars",
    "gays", "gels", "gene", "gens", "gent", "gins", "gite", "glas", "gnon", "gnou",
    "gode", "golf", "gond", "gong", "gout", "gras", "grau", "grec", "gres", "gris",
    "grog", "gros", "grue", "guet", "gyms",
    "haie", "hair", "hall", "halo", "hase", "hate", "haut", "hein", "hier", "hors",
    "hote", "houe", "houx", "huer", "huit", "hure",
    "ibis", "idee", "idem", "iles", "imam", "imbu", "inca", "inde", "inne", "inox",
    "insu", "iode", "ions", "iota", "ires", "iris", "issu", "itou", "ivre",
    "jack", "jade", "java", "jazz", "jean", "jeep", "jets", "jeun", "jeux", "jobs",
    "joie", "joli", "jonc", "joue", "joug", "joui", "jour", "judo", "juge", "juif",
    "juin", "jupe", "jury", "jute",
    "kaki", "kami", "kart", "kepi", "khan", "kifs", "kiki", "kilo", "kilt", "kiwi",
    "lacs", "lady", "laid", "laie", "lais", "lait", "lama", "lame", "lard", "lave",
    "lent", "leur", "lice", "lien", "lieu", "lige", "lime", "lino", "lion", "lire",
    "lits", "lobe", "loft", "loge", "logo", "loin", "lois", "lolo", "long", "lors",
    "loto", "lots", "loup", "luge", "lune", "lute", "luth", "luxe", "lynx", "lyre",
    "macs", "mage", "maia", "main", "mais", "maki", "male", "malt", "mana", "mans",
    "marc", "mare", "mari", "mars", "math", "mats", "maux", "maya", "mecs", "melo",
    "meme", "menu", "mere", "mers", "mets", "midi", "miel", "mien", "mime", "mimi",
    "mine", "mini", "miro", "mise", "mite", "mode", "mois", "mole", "mols", "mome",
    "mono", "mont", "mort", "moto", "mots", "moue", "muer", "muet", "mule", "murs",
    "muse",
    "nage", "naif", "nain", "nana", "naze", "nazi", "nefs", "nene", "neon", "nerf",
    "neuf", "niai", "nids", "nier", "noce", "noir", "noix", "noms", "none", "nope",
    "nord", "note", "nous", "nuee", "nuit", "nuls",
    "obus", "ocre", "odes", "oeil", "oeuf", "ogre", "ohms", "oies", "omis", "once",
    "onde", "onyx", "onze", "opus", "oral", "orbe", "orée", "ores", "orge", "oser",
    "oter", "ouie", "ouir", "ours", "oust", "ovin", "ovni",
    "pack", "page", "paie", "pain", "pair", "paix", "pale", "pans", "paon", "papa",
    "pape", "papi", "papy", "parc", "pari", "pate", "paye", "pays", "peau", "peon",
    "pepe", "pere", "peur", "peze", "piaf", "pics", "pied", "pieu", "pile", "pins",
    "pion", "pipe", "pipi", "pire", "plan", "plat", "plis", "plot", "plus", "pneu",
    "poil", "pois", "pole", "poli", "polo", "pont", "porc", "pore", "port", "pose",
    "pote", "pots", "pouf", "pour", "poux", "pres", "pret", "prix", "prof", "pros",
    "prou", "pubs", "puce", "puer", "puis", "pull", "puma", "punk", "pure", "purs",
    "pute",
    "quai", "quel", "quoi",
    "race", "rage", "raid", "raie", "rail", "rale", "rame", "rami", "rang", "rape",
    "rapt", "rare", "rate", "rats", "ravi", "reac", "recu", "reel", "reer", "regi",
    "rein", "rene", "rets", "reve", "rhum", "ride", "rien", "rime", "ring", "rire",
    "rite", "rive", "robe", "rocs", "rois", "role", "rond", "rose", "roti", "rots",
    "roue", "roux", "rude", "ruee", "ruer", "rues", "ruse",
    "sacs", "saga", "sage", "sain", "sake", "sale", "sang", "sans", "sauf", "saut",
    "saxo", "scie", "seau", "secs", "sein", "sels", "sept", "sets", "seul", "seve",
    "sexe", "sexy", "site", "shis", "slip", "slow", "snob", "soda", "sofa", "soie",
    "soif", "soin", "soir", "soja", "sole", "solo", "sols", "sono", "sons", "sots",
    "souk", "soul", "sous", "spot", "star", "stop", "sucs", "suer", "suez", "suie",
    "sure", "surf",
    "tact", "taie", "talc", "tank", "tant", "taon", "tard", "tare", "taux", "taxe",
    "taxi", "tele", "tels", "test", "tetu", "thes", "thon", "thym", "tics", "tien",
    "tige", "tilt", "tirs", "tocs", "toge", "toit", "tole", "tome", "tons", "topo",
    "tops", "tors", "tort", "tour", "tous", "tout", "toux", "trac", "tram", "tres",
    "trio", "trip", "tris", "troc", "trop", "trot", "trou", "truc", "tsar", "tuba",
    "tube", "tuer", "turc", "type", "typo"
];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var messagesAccueil = [
  ["Oh mon dieu !!! <@", "> vient d'arriver !"],
  ["Salut <@", ">, tu veux un cookie ? :cookie:"],
  ["<@", ">, j'espère que tu aimes les paras. :smiley:"],
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
marbre et les baldaquins à matelas à mémoire de forme, accès limité à la WiFi, gouttières en zinc et tuiles en terre \
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

module.exports = {
  messagesAccueil: messagesAccueil,
  alphabet: alphabet,
  listeDeMots: listeDeMots
}
