
import { getHeroeById } from './bases/08-import-export';

// promesas 
// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(()=> {

//         const h1 = getHeroeById(1);
//         resolve( h1 );
//     }, 2000);
// } );


// promesa.then( (heroe) =>{
//     console.log('heroe', heroe);
// })
// .catch(err => console.warn(err));




const getHeroeByIdAsync = (id) =>{
    return new Promise( (resolve, reject) => {
        setTimeout(()=> {
            const h1 = getHeroeById( id );
            
            if (h1) {
                resolve( h1 );
            } else{
                reject('No existe el heroe')
            }
           
        }, 2000);
    } );

   
    
}
getHeroeByIdAsync(14)
    .then( heroe => console.log('heroe', heroe))
    // .then( console.log) esto es lo mismo de arriba
    .catch(err => console.log(err));
    // .catch( console.log) esto es lo mismo en el catch