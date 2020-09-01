// Filter retorna um array com a mesma quantidade de elementos ou menos.

//               0   1   2   3   4.....
const numeros = [5, 10, 13, 25, 11, 15, 48, 98, 25];

const numerosFilter = numeros.filter(v => v > 10);

console.log(numerosFilter);

console.log('######################################################');

const pessoas = [
    { nome: 'Nego Ban', idade: 69},
    { nome: 'Ban', idade: 9},
    { nome: 'Goku', idade: 10},
    { nome: 'Trunks', idade: 29},
    { nome: 'Amore', idade: 123}
];


const pessoasNome = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasIdade = pessoas.filter(obj => obj.idade > 50);
const pessoaA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('n'));

console.log(pessoasNome, pessoasIdade, pessoaA)