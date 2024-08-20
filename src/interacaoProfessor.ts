import { Professor } from "./Professor";

const professor1: Professor = new Professor (19,`Matematica`, 1.75);
const professor2: Professor = new Professor (33,`Ingles`,1.99);
const professor3: Professor = new Professor (23,`Português`, 1.81);


console.log(professor1.getIdade());
console.log(professor2.getDisciplima());
console.log(professor3.getAltura());
