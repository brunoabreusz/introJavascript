function oiNe(a, b, c) {

    // console.log(arguments)

    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}

oiNe(1, 2, 3, 4, 5);

console.log('#############################################');

function neOi(d, e, f) {
    console.log(d, e, f)
}

neOi(1, 2)

console.log('#############################################');
// Rest
const conta = function (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};

conta('+', 0, 10, 10, 20, 20);

console.log('#############################################');

const args = (...args) => {
    console.log(args);
}

args(1, 2, 3, 4, 5)