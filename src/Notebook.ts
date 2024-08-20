export class Empilhadeira{
    //ATRIBUTOS
    private modelo: string;
    private cor: string;
    private marca: string;

    //CONSTRUCTOR
    public constructor (_modelo: string, _cor: string, _marca: string){
        this.modelo = _modelo;
        this.cor = _cor;
        this.marca = _marca;
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
        public getMarca(): string{
            return this.marca;
        }
        public setMarca(_marca: string): void{
            this.marca = _marca;
        }
        //MÉTODO DIAGRAMA

        public Empilhando(): void{
        return console.log(`A ${this.modelo} está organizando os paletes`);
        }
        public Dirigir(): void{
        return console.log(`Dirigindo...`)
        }
}