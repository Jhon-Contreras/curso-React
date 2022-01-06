
const persona1 = {
    nombre: 'Jhon',
    apellido: 'Contreras'
}
// spread operator 
const persona2 = {...persona1};

persona2.nombre = 'Pelao';

console.log(persona1);
console.log(persona2);