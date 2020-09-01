const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 11, 15, 22, 27, 30]
const numerosEmDobro = numeros.map(valor => valor * 2);

console.log(numerosEmDobro)

console.log('######################################################');

const pessoas = [
    { nome: 'Nego Ban', idade: 69},
    { nome: 'Ban', idade: 9},
    { nome: 'Goku', idade: 10},
    { nome: 'Trunks', idade: 29},
    { nome: 'Amore', idade: 123}
];


const nome = pessoas.map((obj) => obj.nome)
const removeIdade = pessoas.map(obj => ({idade: obj.idade}));
const id = pessoas.map(function(obj, indice){
    const newObj = {...obj}
    newObj.id = (indice + 1);
    return newObj;
});

console.log(nome, removeIdade, id, pessoas);

