export class Bicicleta{
    //ATRIBUTOS
    private cor: string;
    private modelo: string;
    private aro: string;

    //CONSTRUCTOR
    public constructor ( _cor: string, _modelo: string, _aro: string){
        this.cor = _cor;   
        this.modelo = _modelo;
        this.aro = _aro;
    }
        //MÉTODOS GET E SET
        public getCor(): string{
            return this.cor;
        }
        public setCor(_cor: string): void{
            this.cor = _cor;
        }
        public getModelo(): string{
            return this.modelo;
        }
        public setModelo(_modelo: string): void{
            this.modelo = _modelo;
        }
        public getAro(): string{
            return this.aro;
        }
        public setAro(_aro: string): void{
            this.aro = _aro;
        }
        //MÉTODO DIAGRAMA

        public Pedalar(): void{
        return console.log(`Você está pedalando...`)
        }
        public Frear(): void{
        return console.log(`Você freiou a bicicleta!`);
        }
}