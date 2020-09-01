const bruno = ['bruno', 'de', 'abreu']; // literal.
const novo = bruno; // apontam pro msm local.

// delete bruno[2];
console.log('#####################################')

const bruno2 = ['bruno', 'de', 'abreu'];
const novo2 = [...bruno2] // independente

console.log('#####################################')

console.log(novo2.length) // ver o tamanho.
novo2.pop() // remove o ultimo.
novo2.shift() // remove o primeiro e realoca os demais.
novo2.push('bruno') // adiciona no final do array.
novo2.unshift('indice 0') // adiciona no começo.
const novoArray = novo2.slice(1, 2) // exebi os arrays, podendo manipular o msm.

console.log('#####################################')

const nome = "Bruno de Abreu de Souza";
const nomes = nome.split(' ');
console.log(nomes)

const nome2 = ['Bruno', 'de', 'Abreu']
const nomes2 = nome2.join(' ');
console.log(nomes2)