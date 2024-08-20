import { Lixeira } from "./Lixeira";

const lixeira1: Lixeira = new Lixeira (`Calçada`,`Grande`, `Vermelho`);
const lixeira2: Lixeira = new Lixeira (`Container`,`Médio`,`Preto` );
const lixeira3: Lixeira = new Lixeira (`Lixeira de Metal`,`Grande`,`Verde` );


console.log(lixeira1.getModelo());
console.log(lixeira2.getTamanho());
console.log(lixeira3.getCor());


