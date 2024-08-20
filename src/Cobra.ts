export class Empilhadeira{
    //ATRIBUTOS
    private especie: string;
    private tamanho: string;
    private peconheto: string;

    //CONSTRUCTOR
    public constructor (_especie: string, _tamanho: string, _peconhento: string){
        this.especie = _especie;
        this.tamanho = _tamanho;
        this.peconheto = _peconhento;
    }
        //MÉTODOS GET E SET
        public getModelo(): string{
            return this.especie;
        }
        public setModelo(_especie: string): void{
            this.especie = _especie;
        }
        public getCor(): string{
            return this.tamanho;
        }
        public setCor(_tamanho: string): void{
            this.tamanho = _tamanho;
        }
        public getMarca(): string{
            return this.peconheto;
        }
        public setMarca(_peconhento: string): void{
            this.peconheto = _peconhento;
        }
        //MÉTODO DIAGRAMA

        public Empilhando(): void{
        return console.log(`A ${this.especie} está organizando os paletes`);
        }
        public Dirigir(): void{
        return console.log(`Dirigindo...`)
        }
}