// Desestructuracion
// Asignación desestructurante 

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    clave: 'IronMan',
}

// extrae lo que venga dentro de las llaves, del objeto persona 
const { nombre, apellido, edad } = persona;

console.log( nombre, apellido, edad );

// desestructuracion en el argumento 
//tambien pasamos propiedades que no existen en el objeto (rango)
const retornaPersona = ( {clave, nombre, edad, rango = 'Capitan'} ) => {
    console.log(nombre, edad, rango);
}
retornaPersona(persona);


const retornaPersona2 = ( {clave, nombre, edad} ) => {
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 123123132,
            lng: 230200202,
        }
    }
}
const {nombreClave, anios, latlng:{lat, lng}} = retornaPersona2(persona);
console.log( nombreClave, anios);
console.log(lat, lng);