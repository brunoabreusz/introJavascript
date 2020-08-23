// Escreva uma função que recebe 2 números e retorne o maior deles

function maiorNumero(min, max){
    if(max > min){
        console.log(max)
    }else {
        console.log(min)
    }
    return;
    // return max > min ? max: min;
}

maiorNumero(1000, 20)