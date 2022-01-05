// funciones 

const saludar = function( nombre ){
    return `Hola, ${ nombre }`
}

const saludar2 = (nombre) => {   
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar('Jhon'));
console.log(saludar2('Jhon'));
console.log(saludar3('Jhon'));


const getUser = () =>({
   
    uid: 'abc123',
    username: 'El_choromota123'
    
})


console.log(getUser());

//tarea

// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito 
// 3. Pruebas 

function getUsuarioActivo(nombre){
    return{
        uid: '12312321',
        username: nombre,
    }
}

const usuarioActivo = getUsuarioActivo('Jhon');
console.log(`El usuario activo es`, usuarioActivo.username);


// solucion 

const getUsuarioActivo2 = (nombre) => ({
    uid: '123123333333',
    username: nombre,
});

const usuarioActivo2 = getUsuarioActivo2('Jhon2');
console.log('El usuario activo es', usuarioActivo2.username);