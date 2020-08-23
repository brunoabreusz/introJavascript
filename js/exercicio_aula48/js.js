const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'section', texto: 'frase 3'},
    {tag: 'footer', texto: 'frase 4'},
];


const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i]; // desestrurando o object.
    let tagCriada = document.createElement(tag); // recebendo as tags através do for.
    tagCriada.innerHTML = texto; // innerText ao invés de innerHTML.
    div.appendChild(tagCriada) // insere um elemento.
}

container.appendChild(div);