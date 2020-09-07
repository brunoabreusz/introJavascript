class DispositivoEletronico{
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado.`);
            return
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desigado.`);
            return
        }

        this.ligado = false;
    }
}

const D1 = new DispositivoEletronico('MotoG 5S');
D1.ligar();

console.log('#############################################################');

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        // Quando extende precisa do SUPER
        this.cor = cor;
        this.modelo = modelo;
    }
}

const S1 = new Smartphone('Motorola', 'Preto', 'MotoG 10');

console.log('#############################################################');
