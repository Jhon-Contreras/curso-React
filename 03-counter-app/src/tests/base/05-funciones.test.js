import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {
  
    test('getUser debe de retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        
        expect(user).toEqual( userTest ); //toEqual para comparar propiedades y valores, toBe no sirve para ese tipo de comparaciones
    });

    test('getUsuarioActivo debe de retornar un objeto', () => {
        
        const nombre = 'Jhon';
        const userActivoTest = {
            uid: 'ABC567',
            username: nombre
        }

        const userActivo = getUsuarioActivo(nombre);
        console.log(userActivo);
        expect(userActivo).toEqual(userActivoTest);

    });
    
   
});
