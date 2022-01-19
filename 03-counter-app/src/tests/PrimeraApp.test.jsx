import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimerApp />', () => {
  test('Debe de mostrar el mensaje "hola mundo"', () => {
    
    const saludo = 'hola mundo';
    const { getByText } = render(<PrimeraApp saludo={saludo}/>);

    expect(getByText(saludo)).toBeInTheDocument();

  });
  
});


