import { Lampada } from "./lampada";

const lamp1: Lampada = new Lampada (`Lâmpada LED Bulbo`,`Vermelho`, 11);
const lamp2: Lampada = new Lampada (`Decorativa`,`Preto`, 24);
const lamp3: Lampada = new Lampada (`Lâmpada LED Tubular`,`Verde`, 23);


console.log(lamp1.getModelo());
console.log(lamp2.getCor());
console.log(lamp3.getPotencia());

console.log(lamp2.Ligar());
console.log(lamp3.Iluminar());


