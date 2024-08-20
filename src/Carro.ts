export class Carro{
    //ATRIBUTOS
    private modelo: string;
    private cor: string;
    private ano: number;

    //CONSTRUCTOR
    public constructor (_modelo: string, _cor: string, _ano: number){
        this.modelo = _modelo;
        this.cor = _cor;
        this.ano = _ano;
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
        public getAno(): number{
            return this.ano;
        }
        public setAno(_ano: number): void{
            this.ano = _ano;
        }
}