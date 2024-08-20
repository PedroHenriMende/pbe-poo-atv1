import { Carro } from "./Carro";

const carro1: Carro = new Carro (`TypeR`,`Vermelho`, 2023);
const carro2: Carro = new Carro (`BMW X6`,`Preto`, 2024);
const carro3: Carro = new Carro (`Honda`,`Verde`, 2021);

console.log(carro1.getModelo());
console.log(carro2.getCor());
console.log(carro3.getAno());
