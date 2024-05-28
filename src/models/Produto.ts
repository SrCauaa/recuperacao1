export class Produto {
    preco: number;
    id: string;
    nome: string;
    descricao: string;
    imagem: string;

    constructor(preco: number, id: string, nome: string, descricao: string, imagem: string) {
        this.preco = preco;
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
    }
}
