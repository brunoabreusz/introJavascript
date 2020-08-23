const tresHoras = 60 * 60 * 3 * 1000;
const data1 = new Date(0 + tresHoras);
console.log(data1.toString());

// ano, meses, dias, horas, minutos, segundos, milisegundos.

const data2 = new Date('2020-07-17 21:05:59.200');
console.log('Dia', data2.getDate());
console.log('Mês', data2.getMonth() + 1 ); // mês começa do zero
console.log('Ano', data2.getFullYear());
console.log('Hora', data2.getHours());
console.log('Min', data2.getMinutes());
console.log('Segundo', data2.getSeconds());
console.log('Milisegndos', data2.getMilliseconds());
console.log('Dia da semana', data2.getDay()); // 0 domingo, 6 sábado.
console.log(data2.toString());


function zeroAEsquerda (num){
    return num >= 10 ? num: `0${num}`; 
}

function FormataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia} / ${mes} / ${ano} as ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = FormataData(data);
console.log(dataBrasil)
