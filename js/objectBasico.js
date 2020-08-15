const pessoa = {
    nome: 'bruno',
    sobrenome: 'abreu',
    idade: 19
};

console.log(pessoa)

const criarPessoa = (nome, sobrenome, idade) => {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criarPessoa('Bruno', 'Abreu', 19)
const pessoa2 = criarPessoa('Bruna', 'Abreu', 25)
const pessoa3 = criarPessoa('Brenda', 'Abreu', 23)
console.log(pessoa1, pessoa2, pessoa3)

const pessoa07 = {
    nome: 'Nego',
    sobrenome: 'Bam',
    idade: 69,

    fala(){
        console.log(`${this.idade} minha idade atual.`)
    },
    incrementarIdade() {
        ++this.idade;
    }
}

pessoa07.fala();
pessoa07.incrementarIdade();
pessoa07.fala();