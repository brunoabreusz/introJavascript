 function esperaAi(msg, tempo){
     return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('bad value');

        setTimeout(() => {
            resolve(msg); // Resolve a promessa aí cai no then. 
        }, tempo);
     }); // Reject vai direto pro catch.
 }

 // .then( () => {});
 // .catch(e => {});