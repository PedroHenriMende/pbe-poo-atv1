import { Tijolo } from "./Tijolo";

const tijolo1: Tijolo = new Tijolo (`Vermelhor`,`Médio`, `circular`);
const tijolo2: Tijolo = new Tijolo (`Preto`,`Médio`, `refretários`);
const tijolo3: Tijolo = new Tijolo (`Verde`,`Pequeno`, `paralelepípedo`);


console.log(tijolo1.getCor());
console.log(tijolo2.getTamanho());
console.log(tijolo3.getFormato());
