// Literal

const pessoa = {
    nome: 'bruno',
    sobrenome: 'abreu',
};

const chave = 'nome';

console.log(pessoa[chave]);
console.log(pessoa['sobrenome']);

console.log('#######################################################');

// Construtor

const pessoa1 = new Object();
pessoa1.nome = 'brunão';
pessoa1.sobrenome = 'bitch';
pessoa1.falarNome = function(){
   return (`${this.nome} está falando contigo.`);
};

pessoa1.falarNome();

delete pessoa1.sobrenome;

for(let chave in pessoa1){
    console.log(pessoa1[chave]);
}

console.log('#######################################################'); 

// função construtora

function criarPessoa( nome, sobrenome){
    return {
        nome,
        sobrenome,
    };
};

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // não consegue alterar, nem criar.
};

const p1 = new Pessoa('bruno', 'abreu');
console.log(p1)
