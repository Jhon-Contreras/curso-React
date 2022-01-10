// Los componentes, se escriban con UpperCamelCase 

// para usar Fragment importar desde react 
// import { Fragment } from "react";

// en caso de error de JSX se necesitaría importar react 

// Functional components

const PrimeraApp = () => {

    return (
       <>
            <h1> Hola Mundo desde un Functional Component</h1>
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