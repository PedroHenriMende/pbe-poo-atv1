export class Empilhadeira{
    //ATRIBUTOS
    private genero: string;
    private cor: string;
    private autor: string;

    //CONSTRUCTOR
    public constructor (_genero: string, _cor: string, _autor: string){
        this.genero = _genero;
        this.cor = _cor;
        this.autor = _autor;
    }
        //MÉTODOS GET E SET
        public getModelo(): string{
            return this.genero;
        }
        public setModelo(_genero: string): void{
            this.genero = _genero;
        }
        public getCor(): string{
            return this.cor;
        }
        public setCor(_cor: string): void{
            this.cor = _cor;
        }
        public getMarca(): string{
            return this.autor;
        }
        public setMarca(_autor: string): void{
            this.autor = _autor;
        }
        //MÉTODO DIAGRAMA

        public Empilhando(): void{
        return console.log(`A ${this.genero} está organizando os paletes`);
        }
        public Dirigir(): void{
        return console.log(`Dirigindo...`)
        }
}