// {...Espalha} Spreed Operetor
const n = {1: 1, 2: 2}
const n2 = {...n}

console.log(n2)
console.log(Object.keys(n)) // chaves
console.log(Object.values(n)) // valores
console.log(Object.entries(n)) // os dois.

// freeze congela o objeto.
// defineProperties (define as propriedades)