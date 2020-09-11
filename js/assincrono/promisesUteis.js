function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
       if(typeof msg !== 'string') {
           reject('false');
           return;
        }

       setTimeout(() => {
           resolve(msg);
           return; // Resolve a promessa aí cai no then. 
       }, tempo);
    }); // Reject vai direto pro catch.
}

// Promise.all | resolve toda as promessas e devolve tudo de volta, se uma de errado ele rejeita todas.
const pAll = [
    'primeiro valor', 
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 500),
    esperaAi('promise 3', 1000),
    'outro valor'
];

Promise.all(pAll)
.then((valor) => { console.log(valor )})
.catch((e)=> { console.log(e) })

// Promise.race | primeira que resolver

const pRace = [
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 500),
    esperaAi('promise 3', 1000),
];

Promise.race(pRace)
.then((valor) => { console.log(valor )})
.catch((e)=> { console.log(e) })

// Promise.Resolve | Resolve logo.

//Promise.reject | Rejeita logo.
