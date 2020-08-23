// atribuição via desestruturação arrays

const numeros = [1, 2 ,3, 4, 5,6];
const [um, , tres, ...resto] =  numeros;

console.log(um , tres);
console.log(resto);