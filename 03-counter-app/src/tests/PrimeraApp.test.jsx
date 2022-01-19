import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';

describe('Pruebas en <PrimerApp />', () => {
//prueba con  import '@testing-library/jest-dom/extend-expect'; en setupTests.js

    //   test('Debe de mostrar el mensaje "hola mundo"', () => {
    
//     const saludo = 'hola mundo';
//     const { getByText } = render(<PrimeraApp saludo={saludo}/>);

//     expect(getByText(saludo)).toBeInTheDocument();

//   });

    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
      const saludo = 'hola mundo';
      const wrapper = shallow(<PrimeraApp saludo={ saludo }/>); //shallow es parecido al render()

      expect( wrapper ).toMatchSnapshot();
    });
    
});


