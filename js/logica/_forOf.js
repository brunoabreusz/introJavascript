const nome = ['bruno' ,'de', 'abreu'];




for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

// -@@@@

for (let i in nome){
    console.log(nome[i]);
}

// -@@@@

for (let valor of nome){
    console.log(valor)
}

// -@@@@

nome.forEach(element => {
    console.log(element)
});