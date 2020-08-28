// atribuição via desestruturação objetos

const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Abreu',
    idade: 19,
    sexo: {
        masculino: 'true',
        femenino: 'false'
    }
}

const { sexo: {masculino} } = pessoa;
console.log(masculino);