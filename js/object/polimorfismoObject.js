// Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente ${this.saldo}`)
        return;
    } 

    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo()
};
Conta.prototype.verSaldo = function(){
    console.log(`Ag/C: ${this.agencia}/${this.conta} | ` + 
    `Saldo R$${this.saldo.toFixed(2)}`);
};

// const conta1 = new Conta(11, 22, 100);
// conta1.depositar(11);
// conta1.sacar(30);
// conta1.sacar(81);

function Corrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

Corrente.prototype = Object.create(Conta.prototype);
Corrente.prototype.constructor = Corrente;

Corrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente ${this.saldo}`)
        return;
    } 

    this.saldo -= valor;
    this.verSaldo();
};

function Poupança(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

Poupança.prototype = Object.create(Conta.prototype);
Poupança.prototype.constructor = Poupança;

const contaCorrente = new Corrente(11, 22, 0, 100);
contaCorrente.depositar(10);
contaCorrente.sacar(90);

console.log('');

const contaPoupança = new Poupança(12, 33, 0);
contaPoupança.depositar(10);
contaPoupança.sacar(10);
contaPoupança.sacar(1);