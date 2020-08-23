const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){
    if (numero === 2 || numero === 5){
        continue; // pula p proxima interação...
    }

    if (numero === 7){
        break; // finaliza a execução do codigo...
    } 
    console.log(numero)
}