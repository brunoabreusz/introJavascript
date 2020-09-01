//            -5 -4 -3 -2 -1
//             0  1  2  3  4
const nomes = [1, 2, 3, 4, 5];

// nomes.splice(indice, delete, elemento1.. elemento2)

const removido = nomes.splice(4, 1)
const adicionar = nomes.splice(3, 0, 'Salve')
const addRemove = nomes.splice(0, 5, 'Hello Word')
console.log(nomes)

/*
pop - const removidos = nome.splice(-1, 1);
shifit - const removidos = nome.splice(0, 1);
push - const adicionar = nome.splice(nomes.length, 0, 'bruno');
unshift - cont unshift = nome.splice(0, 0, 'oi')
*/