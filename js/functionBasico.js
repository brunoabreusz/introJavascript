function saudacao(nome) {
    console.log(`bom dia ${nome}`)
    return 123456; // Retorno da função (variavéis)
}

const variavel = saudacao('bruno') // Sem retorno volta indefinido.
console.log(variavel);

function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado; // Nada abaixo será executado.
    
}

console.log(soma(10, 30));

const raiz = function (n) { // function em variavéis.
    return n ** 0.5
};

const raiz = n => n ** 0.5 // arrow function.
