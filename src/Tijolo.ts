export class Tijolo{
    //ATRIBUTOS
    private cor: string;
    private tamanho: string;
    private formato: string;

    //CONSTRUCTOR
    public constructor (_cor: string,_tamanho: string, _formato: string){
        this.cor = _cor;
        this.tamanho = _tamanho;
        this.formato = _formato;
    }
        //MÉTODOS GET E SET
        
        public getCor(): string{
            return this.cor;
        }
        public setCor(_cor: string): void{
            this.cor = _cor;
        }
        public getTamanho(): string{
            return this.tamanho;
        }
        public setTamanho(_modelo: string): void{
            this.tamanho = _modelo;
        }
        public getPotencia(): string{
            return this.formato;
        }
        public setPotencia(_formato: string): void{
            this.formato = _formato;
        }
        //MÉTODO DIAGRAMA

        public Jogar(): void{
        return console.log(`Você jogou os tijolos...`);
        }
        public Construir(): void{
        return console.log(`Construindo casa com os tijolos...`)
        }
}