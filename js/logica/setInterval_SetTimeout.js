function mostrarHora(){
    let data = new Date()

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}


const timer = setInterval(function(){
    console.log(mostrarHora());
}, 1000);

setTimeout(function(){ // só executa uma vez.
    clearInterval(timer);
}, 10000);