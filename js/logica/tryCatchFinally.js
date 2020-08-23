try {
 // Tentativa de código.
} catch(err){
 // Tratamento de erro.
} finally {
 // Sempre executado.
}

function retornaHora(data){
    if (data && !(data instanceof Date)){
       throw new TypeError('Esperando istância de Date.');
    }

    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const hora = retornaHora();
    console.log(hora);
} catch(err) {
    console.log(err)
} finally {
    console.log('Tenha um bom dia.');
}
