// Declaração normal
falaOi();
function falaOi(){
    console.log('Oi');
}

// Function expression
const souUmDado = function(){
    console.log('Sou um dado.');
};

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado);

// Arrow function
const arrowFunction = () => {
    console.log('Sou uma arrow function');
};

arrowFunction()

// Dentro de um Objeto

const objeto = {
    // falar: function(){
    //     console.log('Estou falando.');
    // }
    falar(){
        console.log('Estou falando.');
    }
};

objeto.falar();