export class Flor{
    //ATRIBUTOS
    private cor: string;
    private tamanho: string;
    private especie: string;

    //CONSTRUCTOR
    public constructor ( _cor: string,_tamanho: string, _especie: string){
        this.cor = _cor;
        this.tamanho = _tamanho;
        this.especie = _especie;
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
        public setTamanho(_tamanho: string): void{
            this.tamanho = _tamanho;
        }
        public getEspecie(): string{
            return this.especie;
        }
        public setEspecie(_especie: string): void{
            this.especie = _especie;
        }

        //MÉTODO DIAGRAMA

        public Cheiro(): void{
        return console.log(`hmmmm... você cheirou a flor...`);
        }
        public Desabrochar(): void{
        return console.log(`A Flor desabrochou...`)
        }
}