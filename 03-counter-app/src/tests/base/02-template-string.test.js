import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en archivo 02-template-string.js', () => {
  
        test('getSaludo debe retornar Hola Jhon', () => {
            
            const nombre = 'Jhon';
            const saludo = getSaludo( nombre );  
            expect(saludo).toBe('Hola ' + nombre + '!');
        });

        test('getSaludo debe retornar Hola Carlos! si no hay argumento en nombre', () => {
          
            const saludo = getSaludo();
            expect(saludo).toBe('Hola Carlos!');
            console.log(saludo);
            
        });
        

});
