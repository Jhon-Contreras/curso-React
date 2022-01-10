// Los componentes, se escriban con UpperCamelCase 

// para usar Fragment importar desde react 
// import { Fragment } from "react";

// en caso de error de JSX se necesitaría importar react 

// Functional components

// props con destructuracion 
const PrimeraApp = ( { saludo = 'Hola mundo por defecto' } ) => {

    // const saludo = 'Hola mundo';
    // const saludoObjeto = {
    //     nombre : 'JHhon',
    //     edad: 2
    // };
    return (
       <>
            {/* <pre> { JSON.stringify(saludoObjeto, null, 3) } </pre> */}
            <h1> { saludo } </h1>
            <p>Soy un parrafo</p>
       </>
        // componente con Fragment (necesita importar libreria) 

        // <Fragment>
        // <h1> Hola Mundo desde un Functional Component</h1>
        // <p>Soy un parrafo</p>
        // </Fragment>
    );
  
    
}

export default PrimeraApp;