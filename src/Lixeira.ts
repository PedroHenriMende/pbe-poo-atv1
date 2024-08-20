export class Lixeira{
    //ATRIBUTOS
    private modelo: string;
    private tamanho: number;
    private cor: string;
    //CONSTRUCTOR
    public constructor (_modelo: string, _tamanho: number, _cor: string){
        this.modelo = _modelo;
        this.tamanho = _tamanho;
        this.cor = _cor;
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
        public getTamanho(): number{
            return this.tamanho;
        }
        public setTamanho(_tamanho: number): void{
            this.tamanho = _tamanho;
        }
        //MÉTODO DIAGRAMA

        public JogarLixo(): void{
        return console.log(`você jogou lixo na lixeira...`);
        }
        public Derrubar(): void{
        return console.log(`bumm!!! você derrubou a lixeira...`)
        }
}