function rand(min=0, max=3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        if(typeof msg !== 'string'){
            reject('ERROR');
            return;
        }

        resolve(msg.toUpperCase() + ' passei na promise');
        return;
     }, tempo);
    });
}



// esperaAi('1', rand())
//     .then(valor => {
//         console.log(valor)
//         return esperaAi('2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('3', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//     })
//     .catch(e => console.log(e))

// o await só está disponível com o async

async function executa(){
    try {
        const f1 = await esperaAi('1', rand());
        console.log(f1);
        const f2 = await esperaAi('2', rand());
        console.log(f2);
        const f3 = await esperaAi('3', rand());
        console.log(f3);
     
         console.log('finish' , f3)
    }catch(e){
        console.log(e)
    }

}

executa();

// TIPOS DE PROMISE ()
// PEDENTE {}
// RESOLVIDA []
// REJEITADA </>