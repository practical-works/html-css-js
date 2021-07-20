function Player(name, hp, mp) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.diplayHUD = function() {
        var GetBar = function(char, barSize)
        {
            var bar = "";
            for (var i = 0; i < barSize; i++) {
                bar += char;
            }
            return bar;
        }
        var hud = document.getElementsByClassName("hud")[0];
        var nameElement = document.getElementsByClassName("name")[0];
        var hpElement = document.getElementsByClassName("hp")[0];
        var mpElement = document.getElementsByClassName("mp")[0];
        nameElement.innerHTML = p.name;
        hpElement.innerHTML = "HP:" + GetBar("♥", p.hp);
        hpElement.style.color = "green";
        mpElement.innerHTML = "MP:" + GetBar("♦", p.mp);
        mpElement.style.color = "blue";
    }
}
var p = new Player("James", 5, 5);
p.diplayHUD();
