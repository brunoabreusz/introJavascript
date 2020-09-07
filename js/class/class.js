// class

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando.`);
    }

}

const p1 = new Pessoa('bruno', 'abreu');
console.log(p1.falar())

// função construtora

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando.`);
}

const p2 = new Pessoa2('bruno', 'abreu');
console.log(p2.falar())
