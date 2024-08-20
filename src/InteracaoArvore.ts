import { Arvore } from "./Arvore";

const arvore1: Arvore = new Arvore (`Incompleta`,`Média`,`Verde`);
const arvore2: Arvore = new Arvore (`Bainha`,`Pequena`, `Azul`);
const arvore3: Arvore = new Arvore (`Com Limbo`,`Grande`, `Verde`);

console.log(arvore1.getFolhagem());
console.log(arvore2.getTamanho());
console.log(arvore3.getCor());

