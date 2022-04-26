//Tuple  (egy változó aminek több értéke van)
var tupleMinta:[string, number];
tupleMinta = ["Kis József",22];

console.log(tupleMinta[0])

var kerterFeladat:[number,number]
kerterFeladat = [22,30]


//Enum

enum fizetesTipusok{
    juniorFrontEnd=450000,
    juniorBackEnd=500000,
    juniorFullStack=600000,
    seniorFrontEnd=900000,
    seniorBackEnd=1000000,
    seniorFullStack=1200000
}

var jozsiFizetes:fizetesTipusok=fizetesTipusok.juniorFrontEnd;
console.log(jozsiFizetes);

//Interface

interface Dolgozo{
    nev:string;
    eletkor:number;
    aktiv:boolean;
}

var interfaceObjektum:Dolgozo={nev:"Kis József", eletkor:22, aktiv:true}
console.log(interfaceObjektum.nev,interfaceObjektum.eletkor,interfaceObjektum.aktiv);