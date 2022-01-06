
// desestructuracion de arreglos 
// Asignación desestructurante de arreglos

const personajes = ['Goku', 'Vegeta', 'Gohan'];

// imprimir el 3er personaje 
// se usan comas para emular la posición 
const [ , , p2 ] = personajes;

console.log( p2 );

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log( letras, numeros );

// Tarea
// 1. El primer valor del arreglo se llamará "nombre"
// 2. El segundo valor se llamará setNombre 


const useeState = (valor) =>{
    return [ valor, ()=> {console.log('Hola Mundo');}]
}

const [ nombre, setNombre ] = useeState('Goku');
console.log(nombre);
setNombre();
