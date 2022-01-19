import { getImagen } from "../../base/11-async-await";

describe('Pruebas async - await y fetch', () => {
  test('Debe de retornar una url de imagen', async() => {
    
    const url = await getImagen();

    expect(typeof url).toBe('string');
    console.log(url);

  });
  
});
