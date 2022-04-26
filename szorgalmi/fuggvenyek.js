//Randomszám generátor
function RandomSzamGenerator(alsoHatar, felsoHatar) {
    var generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
    return generaltSzam;
}
//Üres tömb feltöltő
function TombFeltolto(tombHossz) {
    var uresTomb = [];
    for (var i = 0; i <= tombHossz; i++) {
        uresTomb.push(RandomSzamGenerator(1, 100));
    }
    return uresTomb;
}
// Tömb legnagyobb elemének a keresése:
function LegnagyobbElem(vizsgalandoTomb) {
    var maxIndex = 0;
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[maxIndex] < vizsgalandoTomb[i]) {
            maxIndex = i;
        }
    }
    return vizsgalandoTomb[maxIndex];
}
// Tömb legkisebb elemének a keresése:
function LegkisebbElem(vizsgalandoTomb) {
    var minIndex = 0;
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[minIndex] > vizsgalandoTomb[i]) {
            minIndex = i;
        }
    }
    return vizsgalandoTomb[minIndex];
}
// A tömb összege:
function TombOsszege(vizsgalandoTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        osszeg += vizsgalandoTomb[i];
    }
    return osszeg;
}
// A tömb átlaga:
function TombAtlaga(vizsgalandoTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        osszeg += vizsgalandoTomb[i];
    }
    return osszeg / vizsgalandoTomb.length;
}
//Két tömb(halmaz) metszete
function TombMetszet(tomb1, tomb2) {
    var ujTomb = [];
    for (var i = 0; i < tomb1.length; i++) {
        for (var j = 0; j < tomb2.length; j++) {
            if (tomb1[i] == tomb2[j]) {
                var szerepelE = false;
                for (var k = 0; k < ujTomb.length; k++) {
                    if (tomb1[i] == ujTomb[k]) {
                        szerepelE = true;
                    }
                }
                if (szerepelE == false) {
                    ujTomb.push(tomb1[i]);
                }
            }
        }
    }
    var uzenet = "Nincs metszete a két tömbnek";
    if (ujTomb.length >= 1) {
        return ujTomb;
    }
    else {
        return uzenet;
    }
}
var EuropaiUnio = [{
        orszag: "Ausztria",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Belgium",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Bulgária",
        csatlakozas: "2007.01.01"
    },
    {
        orszag: "Ciprus",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Csehország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Dánia",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Egyesült Királyság",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Észtország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Finnország",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Franciaország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Görögország",
        csatlakozas: "1981.01.01"
    },
    {
        orszag: "Hollandia",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Horvátország",
        csatlakozas: "2013.07.01"
    },
    {
        orszag: "Írország",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Lengyelország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Lettország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Litvánia",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Luxemburg",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Magyarország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Málta",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Németország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Olaszország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Portugália",
        csatlakozas: "1986.01.01"
    },
    {
        orszag: "Románia",
        csatlakozas: "2007.01.01"
    },
    {
        orszag: "Spanyolország",
        csatlakozas: "1986.01.01"
    },
    {
        orszag: "Svédország",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Szlovákia",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Szlovénia",
        csatlakozas: "2004.05.01"
    }
];
// 2004ben csatlakozott országok 
function AdottEviCsatlakozok(ev) {
    var orszagTomb = [];
    for (var i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.substr(0, 4) == ev) {
            orszagTomb.push(EuropaiUnio[i].orszag);
        }
    }
    var szoveg = "Nincs adott évben csatlakozás";
    if (orszagTomb.length != 0) {
        return orszagTomb;
    }
    else {
        return szoveg;
    }
}
//orszag keresés
function OrszagKereso(keresettOrszag) {
    for (var i = 0; i < EuropaiUnio.length; i++) {
        var szerepelE = false;
        if (EuropaiUnio[i].orszag == keresettOrszag) {
            szerepelE = true;
            var szoveg1 = "A keresett ország szerepel a listában";
            return szoveg1;
        }
    }
    if (szerepelE == false) {
        var szoveg2 = "A keresett ország NEM szerepel a listában";
        return szoveg2;
    }
}
