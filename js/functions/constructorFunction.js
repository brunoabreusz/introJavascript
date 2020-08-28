// Função construtora => objetos
// Função fábrica => objetos

// Construtora -> (new)

function Pessoa(nome, sobrenome){
    const ID = 10;
    const metodoInterno = () => {
        
    }

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    }

    
}

const p1 = new Pessoa('Luiz', 'Otávio');

p1.metodo();