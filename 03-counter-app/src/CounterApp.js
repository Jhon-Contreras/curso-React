
// importamos PropTypes para manejar el props  value 
import PropTypes from 'prop-types';

// el componente CounterApp es un functional component y recibe el props (desestructurado) 
const CounterApp = ( {value} ) =>{

    //handleAdd
    const handleAdd = (e) =>{
        console.log(e);
    } 
    // retornamos el jsx 
    return (
        <>
            <h1> CounterApp </h1>
            <p> { value } </p>
            <button onClick={ handleAdd }>+1</button>
        </>
    );
}

// establecemos que value es de tipo numero y es requerido 
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

// exportamos el componente 
export default CounterApp;