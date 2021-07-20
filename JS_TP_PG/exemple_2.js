document.body.removeChild(document.querySelector("#p2"));
var element_p = document.createElement("p");
element_p.id = "x";
var texte = document.createTextNode("Paragraphe généré paragraphe généré paragraphe généré");
var para_gen = element_p.appendChild(texte);
document.body.insertBefore(para_gen, document.querySelector("#p3"));

document.getElementById("t1").innerHTML += ' + <a href="" target="_blank">Titre <mark>généré</mark></a>';
document.querySelector("#t1 a").href = "http://elhafid-project.blogspot.com";

document.getElementById("p1").style.color = 'white';
document.getElementById("p1").style.textShadow = '5px 5px 5px red';
document.getElementById("p1").style.fontSize = '200%';

document.body.removeChild(document.getElementById("p4"));

var elem_p = document.createElement("p");
elem_p.innerHTML = 'Paragraphe <strong>généré</strong> pour <mark>remplacemnt</mark>';
elem_p.style.border = "5px dotted black";
elem_p.style.boxShadow = "0px 0px 40px black";
document.body.replaceChild(elem_p, document.getElementById("p6"));

document.querySelector("#p10").parentNode.style.backgroundColor = 'gray';
document.body.childNodes[4].childNodes[0].nodeValue += ' (body child-node)';

var sib = document.body.querySelector("#p10").nextSibling.nextSibling.nextSibling;
sib.textContent += " (next sibling)";
sib.style.height = '50px'; sib.style.fontSize = '170%';