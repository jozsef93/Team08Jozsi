"use strict";
exports.__esModule = true;
//Visszatérési érték és paraméter nélküli eljárás
function IloveTypeScript() {
    document.write("Szeretem a TypeScriptet");
}
//Visszatérés érték nélküli és paraméteres eljárás
function NegyzetKeruletTeruletEljaras(a) {
    var kerulet = 4 * a;
    var terulet = a * a;
    document.write("<br>Az ".concat(a, " oldal\u00FA n\u00E9gyzet ker\u00FClete"));
    document.write("<br>Az ".concat(a, " oldal\u00FA n\u00E9gyzet ker\u00FClete"));
}
function RandomGeneralo100Fuggveny() {
    return Math.round(Math.random() * 100);
}
function NegyzetKeruletFuggveny(a) {
    return 4 * a;
}
function TeglalapKeruletTeruletEljaras(a, b) {
    var kerulet = 2 * (a + b);
    var terulet = a * b;
    document.write("<br>A téglalap kerülete:" + kerulet);
    document.write("<br>Atéglalap területe: " + terulet);
}
