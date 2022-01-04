
const nombre = 'Jhon';
const apellido = 'Contreras';

const nombreCompleto = `Hola, soy ${nombre} ${apellido}`;
console.log(nombreCompleto);



function getSaludo(nombre){
    return 'hola mundo ' + nombre;
    
}
console.log(`Saludo: ${getSaludo(nombre)}`);