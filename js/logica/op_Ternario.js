// (condição) ? 'valor para verdadeiro' : 'valor para falso';

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Normal';
console.log(nivelUsuario);


// if (pontuacaoUsuario >= 1000){
//     console.log('Usuario VIP');
// }else {
//     console.log('Usuario Normal');
// }

const corUsuario = null; // se o usuario escolher cor, será exebido a cor que ele escolheu.
const coPadrao = corUsuario || 'Preta';
// é exebido cor preta.