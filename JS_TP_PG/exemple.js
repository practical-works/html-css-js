var on = false;
function ajouter () {
	if (!on) {
		var element = document.createElement("h1");
		element.id = "scripted";
		var text = document.createTextNode("{ This line was added by a script }");
		var E = element.appendChild(text);
		document.body.insertBefore(E, document.querySelector("h1"));
		on = true;
	} else {
		alert("^_^");
	}
}

function texte() {
	var titre = prompt("Modifier le texte:");
	if (titre != "") {
		document.getElementById("titre").innerHTML = titre;
	}
}
function taille() {
	var tai = prompt("Entrez taille en Pixels:");
	if (tai != "") {
		tai += "px";
		document.getElementById("titre").style.fontSize = tai;
	}
}
function police() {
	var police = prompt("Entrez nom correct de polic:");
	if (police != "") {
		document.getElementById("titre").style.fontFamily = police;
	}
}
function couleur() {
	var couleur = prompt("Entrez nom de couleur ou code hexadécimal (#FFFFFF):");
	if (couleur != "") {
		document.getElementById("titre").style.color = couleur;
	}
}

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

var c = 0;
c = Number(prompt("Choix:"));

switch(c)
{
	case 0: 
		var sommer = function (a,b) {
			return Number(a)+Number(b);
		}
		var x = prompt("Entrez un 1er nombre: ");
		var y = prompt("Entrez un 2ème nombre: ");
		alert("Somme: " + sommer(x,y));
		break;
	case 1:
		var r="";
		for (var i = 0; i < 31; i++) {
			r += "( " + Math.round( Math.random()*20 ) + " ) \n";
		}
		alert("Générer des nombres aléatoires: \n" + r);
		break;
	case 2:
		var t = Date(), d = new Date();
		alert("Afficher des dates:\n" + t + " - Type:" + typeof(t) + "\n" +d + " - Type:" + typeof(d));
		break;
	case 3:
		var tab = [ "mid", "top", "adc", "sup", "jung" ], s="Indice : Valeur\n";
		for (var i = 0; i < tab.length; i++) {
			s += i + " : " + tab[i] + "\n";
		}
		alert("Afficher les éléments d'un tableau:\n" + s);
		break;
	case 4:
		var obj = {
			midlane : "mid",
			toplane : "top",
			botlane1 : "adc",
			botlane2 : "sup",
			nolane : "jung" 
		}; 
		s="Nom : Valeur \n";
		for(var key in obj) {
			s += key + " : " + obj[key] + "\n";
		}
		alert("Afficher les propriétés d'un objet:\n" + s);
		break;
	case 5:
		var Personne = {
			code : 1,
			nom : "Mohamed",
			etat : true,
			afficher : function() { return "#" + this.code + " " + this.nom + " (" + this.etat + ")"; }
		}
		Personne.valeur = 100; // Ajouter un nouvelle propriété
		alert("Afficher un objet littéral avec une méthode:\n" + Personne.afficher() + 
	 		  "\nValeur d'une nouvelle propriété ajoutée: " + Personne.valeur);
		break;
	case 6:
		function forme(t,c) {
			this.taille = t;
			this.couleur = c;
		};
		var koko = new forme(17, "blanche");
		alert("Afficher un objet construit:\n" + 
			  "Forme d'une taille de " + koko.taille + "mètres et de couleur " + koko.couleur + ".");
		break;
	case 7:
		var numS = "7", numN = 7;
		alert("Conversions:\n" + 
		  "Variable 1 : " + numS + " (Type : " + typeof(numS) + ")\n" +
		   "Variable 2 : " + numN + " (Type : " + typeof(numN) + ")\n" +
		   "Variable 1 convertie: " + Number(numS) + " (Type : " + typeof(Number(numS)) + ")\n" +
		   "Variable 2 convertie: " + String(numN) + " (Type : " + typeof(String(numN)) + ")\n");
		break;
	default:
}