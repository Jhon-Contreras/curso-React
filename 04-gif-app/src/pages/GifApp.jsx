import React, { useState } from 'react';
import AddCategory from '../components/AddCategory';

const GifApp = () => {

   
     const [categories, setCategories] = useState(['Star Wars Rebels', 'Clone Wars', 'The Mandalorian']);

    // const handleAdd = () =>{
    //     // esta funcion debe agregar un nuevo elemento al arreglo, con setCategories 
    //     // setCategories( [...categories, 'The book of Boba Fett'] );
    //     setCategories( cats => [...cats, 'The book of Boba Fett'] );
    // }

    return (
        <div>
            <h2>Gif App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

           

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