
// importamos PropTypes para manejar el props  value 
import React, { useState } from 'react'
import PropTypes from 'prop-types';

// el componente CounterApp es un functional component y recibe el props (desestructurado) 
const CounterApp = ( {value = 10} ) =>{

    const [ counter, setCounter ] = useState(value); //retorna un [] con 2 valores

    //handleAdd
    const handleAdd = (e) =>{
        // setCounter( counter + 1)
        // esta es otra alternativa 
        setCounter( (c) => c + 1  )
    } 
    // handleSubtract
    const handleSubtract = (e) =>{
        // setCounter( counter -1)
        setCounter( (c) => c - 1)
    }
    // handleReset 
    const handleReset = (e) =>{
        
        setCounter(value)
    }

    // retornamos el jsx 
    return (
        <>
            <h1> CounterApp </h1>
            <p> { counter } </p>
            <button onClick={ handleSubtract }>-1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleAdd }>+1</button>
        </>
    );
}

// establecemos que value es de tipo numero y es requerido 
CounterApp.propTypes = {
    value: PropTypes.number
}

// exportamos el componente 
export default CounterApp;