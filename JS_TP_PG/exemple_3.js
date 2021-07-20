function fcouleur() {
	document.querySelector("#p2").style.color ='red';
}

document.querySelector("#p3").onclick = function () {
	this.style.color ='green';
};

function couleur() {
	this.style.color ='blue';
};
document.querySelector("#p4").onclick = couleur;
//------------------------------------------------------------------------------
function f (x,y) {
	return x*y;
}
document.querySelector("#r").onclick = function () {
	this.textContent = f(7,3);
};

