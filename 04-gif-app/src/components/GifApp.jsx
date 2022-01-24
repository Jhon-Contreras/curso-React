import React, { useState } from 'react';

const GifApp = () => {

    // const categories = ['Star Wars', 'Marvel', 'DC'];

    const [categories, setCategories] = useState(['Star Wars Rebels', 'Clone Wars', 'The Mandalorian']);

    const handleAdd = () =>{
        // esta funcion debe agregar un nuevo elemento al arreglo, con setCategories 
        // setCategories( [...categories, 'The book of Boba Fett'] );
        setCategories( cats => [...cats, 'The book of Boba Fett'] );
    }

    return (
        <div>
            <h2>Gif App</h2>
            <hr />

            <button onClick={ handleAdd }> Agregar </button>

            <ol>
                { 
                    categories.map( category =>{
                       
                        return <li key={ category }> {category} </li>
                    }) 
                }
            </ol>
        </div>
    );
};

export default GifApp;