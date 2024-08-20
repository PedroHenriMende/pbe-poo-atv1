export class Arvore{
    //ATRIBUTOS
    private folhagem: string;
    private tamanho: number ;
    private cor: string;

    //CONSTRUCTOR
    public constructor (_folhagem: string, _tamanho: number, _cor: string){
        this.folhagem = _folhagem;
        this.tamanho = _tamanho;
        this.cor = _cor;

    }
        //MÉTODOS GET E SET
        public getFolhagem(): string{
            return this.folhagem;
        }
        public setFolhagem(_folhagem: string): void{
            this.folhagem = _folhagem;
        }
        public getCor(): string{
            return this.cor;
        }
        public setCor(_cor: string): void{
            this.cor = _cor;
        }
        public getTamanho(): number{
            return this.tamanho;
        }
        public setTamanho(_tamanho: number): void{
            this.tamanho = _tamanho;
        }
        //MÉTODO DIAGRAMA

        public Fotossintese(): void{
        return console.log(`Oxigênio sendo liberado...`);
        }
        public ProduzirFruto(): void{
        return console.log(`Frutos...`)
        }
}