const numeros = [5, 10, 13, 25, 11, 15, 48, 98, 25];

const numerosPares = numeros
.filter(pares => pares % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor)
console.log(numerosPares)