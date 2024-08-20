export class Professor{
    //ATRIBUTOS
    private idade: string;
    private disciplina: string;
    private altura: number;

    //CONSTRUCTOR
    public constructor (_idade: string, _disciplina: string, _altura: number){
        this.idade = _idade;
        this.disciplina = _disciplina;
        this.altura = _altura;
    }
        //MÉTODOS GET E SET
        public getIdade(): string{
            return this.idade;
        }
        public setIdade(_idade: string): void{
            this.idade = _idade;
        }
        public getDisciplima(): string{
            return this.disciplina;
        }
        public setDisciplina(_disciplina: string): void{
            this.disciplina = _disciplina;
        }
        public getAltura(): number{
            return this.altura;
        }
        public setAltura(_altura: number): void{
            this.altura = _altura;
        }
        //MÉTODO DIAGRAMA

        public DarAula(): void{
        return console.log(`O Professor está dando aula...`);
        }
        public PassarLicao(): void{
        return console.log(`O Professor acaba de deixar uma lição para você...`)
        }
}