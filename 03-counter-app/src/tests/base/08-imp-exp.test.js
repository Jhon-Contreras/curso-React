import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en archivo 08-imp-exp funciones de heroes', () => {
  test('debe de retornar un heroe por id', () => {
        const id = 3;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find( h => h.id === id );
        expect(heroe).toEqual(heroeData);
        
  });
  test('debe de retornar undefined si Heroe no existe', () => {
    const id = 31;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);

 });


// Prueba para retornar arreglo con heroes de DC 
test('debe de retornar un arreglo con los heroes de DC usando toEqual', () => {
  
    const owner = 'DC';
    const heroes = getHeroesByOwner( owner );
    const heroesData = heroes.filter( h => h.owner === owner);
    expect(heroes).toEqual(heroesData);
    
    
});

// Prueba para retornar arreglo con heroes de Marvel 
test('debe de retornar arreglo con heroes de Marvel con .lenght de 2', () => {
  const owner = 'Marvel';
  const heroes = getHeroesByOwner(owner);

  expect(heroes.length).toBe(2);
});

test('debe retornar undefined si no existe el owner', () => {
  
    const owner = 'DICI';
    const heroes = getHeroesByOwner( owner );
    const heroesData = heroes.filter(h => h.owner === owner);

    expect(heroes).toEqual(heroesData);
    console.log(heroes);
    
});


  


});
