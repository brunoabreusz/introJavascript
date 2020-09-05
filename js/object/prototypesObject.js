function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;


}

Pessoa.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}`

const pessoa1 = new Pessoa('bruno', 'a.');

console.log('#######################################################'); 

const objA = {
    A: 'A',
    // __proto__: Object.prototype
};

const objB = {
    B: 'B',
    // __proto__: objB
};

const objC = new Object();
objC.c = 'C'

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log('#######################################################'); 

function Compras(produto, preco){
    this.produto = produto;
    this.preco = preco;
}

Compras.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Compras.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const c1 = new Compras('Mochila', 139)
c1.desconto(100)
console.log(c1)

const c2 = {
    nome: 'Caneca',
    preco: 12
};

Object.setPrototypeOf(c2, Compras.prototype);
console.log(c2);

const c3 = Object.create(Compras.prototype, {
    tamanho:  {
       writable: true,
       configurable: true,
       enumerable: true,
       value: 3 
    }
});




