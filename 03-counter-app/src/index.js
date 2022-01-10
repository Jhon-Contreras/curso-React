// librerias necesarias de react 
import React from 'react'
import ReactDOM from 'react-dom';

// importar componente 
import PrimeraApp from './PrimeraApp';




// importar css 
import './index.css';




const divRoot = document.querySelector('#root');

ReactDOM.render( <PrimeraApp saludo="Hola, soy gokú"/> , divRoot)


