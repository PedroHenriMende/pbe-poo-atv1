import { Cobra } from "./Cobra";

const cobra1: Cobra = new Cobra (`Cascavel`,`Grande`,`Venenosa`);
const cobra2: Cobra = new Cobra (`Sucuri`,`Grande`, `Não Venenosa`);
const cobra3: Cobra = new Cobra (`Python`,`Médio`, `Venenosa`);

console.log(cobra1.getEspecie());
console.log(cobra2.getTamanho());
console.log(cobra3.getPeconhento());

