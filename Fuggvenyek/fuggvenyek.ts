export { };
//Visszatérési érték és paraméter nélküli eljárás
function IloveTypeScript(): void {
    document.write("Szeretem a TypeScriptet")
}

//Visszatérés érték nélküli és paraméteres eljárás

function NegyzetKeruletTeruletEljaras(a: number): void {
    let kerulet = 4 * a;
    let terulet = a * a;
    document.write(`<br>Az ${a} oldalú négyzet kerülete`);
    document.write(`<br>Az ${a} oldalú négyzet kerülete`);
}

function RandomGeneralo100Fuggveny(): number {
    return Math.round(Math.random() * 100);
}

function NegyzetKeruletFuggveny(a: number): number {
    return 4 * a;
}

function TeglalapKeruletTeruletEljaras(a: number, b: number): void {
    let kerulet = 2 * (a + b);
    let terulet = a * b;
    document.write("<br>A téglalap kerülete:" + kerulet);
    document.write("<br>Atéglalap területe:" + terulet);
}

function ParosEFuggveny(szam: number): boolean {
    if (szam % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

//Primszam generator

function IntervallumosPrimszamGenerator(alsoHatar: number, felsoHatar: number): number {
    let generaltSzam: number = Math.round(Math.random() * (felsoHatar-alsoHatar) + alsoHatar);
    let oszto: number = 0;
    for (let i = 1; i <= generaltSzam; i++) {
        if (generaltSzam % i == 0) {
            oszto++
        }
    }
    if (oszto == 2) {
        return generaltSzam
    }
}

//Teglalap kerület terület (tuple)
function TeglalapKeruletTeruletTupleFuggveny(a:number,b:number):[number,number]{
    var kerulet:number=2*(a+b);
    var terulet:number=a*b;
    return [kerulet,terulet]
}
// Univerzális tömb generátor
function UniverzálisTombGeneratior(meret:number,alsoHatar:number,felsoHatar:number):Array<number>{
    let generaltTomb:Array<number>=[];
    for(var i=0;i<meret;i++){
        generaltTomb.push(Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar)
    }
    return generaltTomb;
}
//összegzes tetele
function Tombosszege(beTomb:Array<number>):number{
    var osszeg:number=0;
    for(var i=0;i<beTomb.length; i++){
        osszeg+=beTomb[i];
    }
    return osszeg;
}