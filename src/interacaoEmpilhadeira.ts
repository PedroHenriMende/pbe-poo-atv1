import { Empilhadeira } from "./Empilhadeira";

const empilhadeira1: Empilhadeira = new Empilhadeira (`Elétrica`,`Vermelho`, `Yale`);
const empilhadeira2: Empilhadeira = new Empilhadeira (`EFG 430`,`Preto`, `Clark`);
const empilhadeira3: Empilhadeira = new Empilhadeira (`EFG 216`,`Verde`, `Toyota`);


console.log(empilhadeira1.getModelo());
console.log(empilhadeira2.getCor());
console.log(empilhadeira3.getMarca());
