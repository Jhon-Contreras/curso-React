
const activo = true;
// let mensaje = ' ';

// if (activo) {
//     mensaje = 'Activo'
// } else{
//     mensaje = 'Inactivo'
// }

const mensaje1 = (activo) ? 'Activo' : 'Inactivo' 
const mensaje2 = (activo) ? 'Activo' : null;
const mensaje3 = activo && 'Activo';

console.log(mensaje1);
console.log(mensaje2);
console.log(mensaje3);