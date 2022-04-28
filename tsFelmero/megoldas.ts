//1 feladat:
function diakinfo (nev:string,csoport:number,type:boolean):string{
    if(type==true){
        var szoveg:string=`${nev} [Team0${csoport}] = Junior Frontend`
        return szoveg
    }
    else{
        var szoveg:string=`${nev} [Team0${csoport}] = Webprogramozó`
        return szoveg
    }
}

//2 feladat:
function MagatartasSzorgalom(jegy:number):[string, string]{
    var ertekeles:[string, string]
    if(jegy==5){
        return ertekeles=["Példás", "Példás"];
    }
    else if(jegy==4){
        return ertekeles=["Jó", "jó"];
    }
    else if(jegy==3){
        return ertekeles=["Változó", "Változó"];
    }
    else if(jegy==2){
        return ertekeles=["Hanyag", "Rossz"];
    }
    else{

    }
}

//3 feladat:
function HarommalOszthatoSzamok(vizsgaltTomb:Array<number>):number{
    var harommalOszthatoSzamokMennyisege:number=0
    for (var i=0; i<vizsgaltTomb.length; i++){
        if(vizsgaltTomb[i]%3==0){
            harommalOszthatoSzamokMennyisege++
        }
    }
return harommalOszthatoSzamokMennyisege
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