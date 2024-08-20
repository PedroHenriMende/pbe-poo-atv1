import { Notebook } from "./Notebook";

const notebook1: Notebook = new Notebook (`Inspiron`,`i5 11th`, `Dell`);
const notebook2: Notebook = new Notebook (`Predator`,`Intel® Core™ Ultra 9 185H`,`Accer` );
const notebook3: Notebook = new Notebook (`Nitro5`,`i5 9th`,`Accer` );


console.log(notebook1.getModelo());
console.log(notebook2.getPrcessador());
console.log(notebook3.getMarca());


