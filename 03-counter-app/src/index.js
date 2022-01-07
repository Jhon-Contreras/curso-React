import React from 'react'
import ReactDOM from 'react-dom';

console.log('Hola mundo');

const saludo = <h1>Hola Mundo desde React</h1>;
const divRoot = document.querySelector('#root');

ReactDOM.render(saludo, divRoot);
