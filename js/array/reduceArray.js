//SOMA DE TODOS OS ARRAYS

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 11, 15, 22, 27, 30]
const total = numeros.reduce(function(acumulador, valor){
acumulador += valor;
return acumulador;
}, 0);

console.log(total);


console.log('######################################################');

const pessoas = [
    { nome: 'Nego Ban', idade: 69},
    { nome: 'Ban', idade: 9},
    { nome: 'Goku', idade: 10},
    { nome: 'Trunks', idade: 29},
    { nome: 'Amore', idade: 123}
];

const MaisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(MaisVelha)
