//1 feladat:
function diakinfo(nev, csoport, type) {
    if (type == true) {
        var szoveg = "".concat(nev, " [Team0").concat(csoport, "] = Junior Frontend");
        return szoveg;
    }
    else {
        var szoveg = "".concat(nev, " [Team0").concat(csoport, "] = Webprogramoz\u00F3");
        return szoveg;
    }
}
//2 feladat:
function MagatartasSzorgalom(jegy) {
    var ertekeles;
    if (jegy == 5) {
        return ertekeles = ["Példás", "Példás"];
    }
    else if (jegy == 4) {
        return ertekeles = ["Jó", "jó"];
    }
    else if (jegy == 3) {
        return ertekeles = ["Változó", "Változó"];
    }
    else if (jegy == 2) {
        return ertekeles = ["Hanyag", "Rossz"];
    }
    else {
    }
}
//3 feladat:
function HarommalOszthatoSzamok(vizsgaltTomb) {
    var harommalOszthatoSzamokMennyisege = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 3 == 0) {
            harommalOszthatoSzamokMennyisege++;
        }
    }
    return harommalOszthatoSzamokMennyisege;
}
//4 feladat:
/*
function NyeroSzamSorsolo(mennyiseg:number,alsoHatar:number,felsoHatar:number):Array<number>{
    var tomb:Array<number>=[]
    var generaltSzam:number=Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
    for(var i=0;i<mennyiseg;i++){
        if(tomb[i]!=generaltSzam)
        tomb.push(generaltSzam)
        }
    }
    return tomb
}*/ 
