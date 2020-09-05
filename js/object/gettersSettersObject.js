function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: false, 
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Deu ruim!');
            }

            estoquePrivado = valor;
        }
    });

    // Object.defineProperties(this, {
    //     nome: {
    //         enumerable: true, // mostra a chave
    //         value: nome, // valor
    //         writable: true, // pode alterar
    //         configurable: true, // configuravel.
    //     },
    //     preco: {
    //         enumerable: true, // mostra a chave
    //         value: preco, // valor
    //         writable: true, // pode alterar
    //         configurable: true, // configuravel.
    //     },
    // });
}

const p1 = new Produto('Camiseta', 20, 3);

console.log(p1)

console.log('#######################################################'); 
