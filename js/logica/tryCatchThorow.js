// try {
//     console.log(naoExisto)
// } catch(err){
//     console.log('Não existo.')
//     console.log(err)
// }

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números.');
    }
    return x + y;
}

try {
console.log(soma(3, '3'))
} catch(err) {
    console.log('error');
}