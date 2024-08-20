import { Camera } from "./Camera";

const camera1: Camera = new Camera (`DSLR`,`Vermelho`, `Pequeno`);
const camera2: Camera = new Camera (`Câmera de sensor full-frame`,`Preto`, `Pequeno`);
const camera3: Camera = new Camera (`Cropado`,`Verde`, `Grande`);


console.log(camera1.getModeloCamera());
console.log(camera2.getCor());
console.log(camera3.getTamanho());

