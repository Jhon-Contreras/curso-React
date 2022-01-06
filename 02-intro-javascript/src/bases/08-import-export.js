
import heroes, { owners } from '../data/heroes';
// console.log(owners);

// .find()
// version normal 
// const getHeroeById = (id) => {
//     return heroes.find(heroe => heroe.id === id)

// }
// version simplimplificda 
export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id)

// console.log(getHeroeById(3));


// .filter() 
export const getHeroesByOwner = ( owner ) => heroes.filter( heroe => heroe.owner === owner )

// console.log(getHeroesByOwner('Marvel'));

