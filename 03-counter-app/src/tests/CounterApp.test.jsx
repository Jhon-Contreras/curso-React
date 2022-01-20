import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';

describe('Pruebas en CounterApp.jsx', () => {
  
    test('Debe de mostrar <CounterApp /> correctamente (hacer match con un snapshot)', () => {
      
      
        const wrapper = shallow(<CounterApp/>);
        expect(wrapper).toMatchSnapshot();

    });
    test('debe de mostrar el valor por defecto de 100', () => {
       
        const wrapper = shallow(<CounterApp value={ 100 }/>);
        const counterText = wrapper.find('p').text().trim();
        expect(counterText).toBe('100');
       
    });
    
    
});
