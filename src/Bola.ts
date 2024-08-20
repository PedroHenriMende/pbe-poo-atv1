export class Lampada{
    //ATRIBUTOS
    private modelo: string;
    private cor: string;
    private tipoDeBola: string;

    //CONSTRUCTOR
    public constructor (_modelo: string, _cor: string, _tipodebola: string){
        this.modelo = _modelo;
        this.cor = _cor;
        this.tipoDeBola = _tipodebola;
    }
        //MÉTODOS GET E SET
        public getModelo(): string{
            return this.modelo;
        }
        public setModelo(_modelo: string): void{
            this.modelo = _modelo;
        }
        public getCor(): string{
            return this.cor;
        }
        public setCor(_cor: string): void{
            this.cor = _cor;
        }
        public getTipoDeBola(): string{
            return this.tipoDeBola;
        }
        public setTipoDeBola(_tipodebola: string): void{
            this.tipoDeBola = _tipodebola;
        }
        //MÉTODO DIAGRAMA

        public Chutar(): void{
        return console.log(`Você chutou a bola...`)
        }
        public Arremassar(): void{
        return console.log(`Você arremessou a bola...`);
        }
}