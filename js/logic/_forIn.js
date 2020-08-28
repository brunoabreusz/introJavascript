const frutas = ['pera', 'maça', 'uva'];

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i])
// }

for (let i in frutas){
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'bruno',
    sobrenome: 'abreu',
    idade: 19
};

for (let i in pessoa){
    console.log(pessoa[i])
}  