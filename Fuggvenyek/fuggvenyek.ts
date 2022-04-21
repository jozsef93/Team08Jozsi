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