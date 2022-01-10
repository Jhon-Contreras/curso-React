// librerias necesarias de react 
import React from 'react'
import ReactDOM from 'react-dom';

// importar componente 
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';


// importar css 
import './index.css';





const divRoot = document.querySelector('#root');

// ReactDOM.render( <PrimeraApp saludo="hola mundo"/> , divRoot)
ReactDOM.render(<CounterApp value={ 28 }/>, divRoot)



// # Tarea CounterApp


// 1. Crear un nuevo componente dentro de la carpeta SRC llamado (LISTO)
//     ```CounterApp```

// 2. El CounterApp debe de ser un __Functional Component__ (LISTO)

// 3. El contenido del __CounterApp__ debe de ser: (LISTO)
//     ```
//         <h1>CounterApp</h1>
//         <h2> { value } </h2>
//     ```

// 4. Donde ```"value"``` es una propiedad enviada desde el padre hacia
//     el componente __CounterApp__ __(Debe ser númerica validada con PropTypes)__ (LISTO)

// 5. Reemplazar en el index.js el componente de <PrimeraApp />
//     por el componente <CounterApp /> 
//         (no se olviden del value que debe de ser un número)

// 6. Asegúrense de no tener errores ni warnings 
//     (Cualquier warning no usado, comentar el 