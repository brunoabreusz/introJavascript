function _sortear(quantidade, maximo) {
    var numeros = [];
  
    console.time('Sorteando');
  
    // Preenche um array com os números de 1 ao maximo
    for (var numero = 1; numero <= maximo; numero++) {
      numeros.push(numero);
    }
    
    numeros.sort(function randomizar(a, b) {
      return Math.random() * 2 - 1; // Ordena randomicamente
    });
  
    console.timeEnd('Sorteando');
    
    return numeros.splice(0, quantidade);
  }


  numsort1 = document.querySelector('#numsort1');
  numsort1.innerHTML = (_sortear(6, 60).join(' , '));

 