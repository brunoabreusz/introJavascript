const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    },
}
const jogando = {
    jogando() {
        console.log(`${this.nome} está jogando.`);
    },
}


const pessoaPrototype = Object.assign({}, falar, jogando);

function criaPessoa(nome, sobrenome){

    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Gold', 'Gado');
const p2 = criaPessoa('Gado', 'Bronze');
console.log(p1);

// const falar = {
//     falar() {
//       console.log(`${this.nome} está falando.`);
//     },
//   };
  
//   const comer = {
//     comer() {
//       console.log(`${this.nome} está comendo.`);
//     },
//   };
  
//   const beber = {
//     beber() {
//       console.log(`${this.nome} está bebendo.`);
//     },
//   };
  
//   const pessoaPrototype = Object.assign({}, falar, comer, beber);
  
//   function criaPessoa(nome, sobrenome) {
//     return Object.create(pessoaPrototype, {
//       nome: { value: nome },
//       sobrenome: { value: sobrenome }
//     });
//   }
  
//   const p1 = criaPessoa('Luiz', 'Otávio');
//   const p2 = criaPessoa('Maria', 'A.');
//   console.log(p2);