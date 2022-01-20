import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';

describe('Pruebas en CounterApp.jsx', () => {
    let wrapper = shallow(<CounterApp/>);
    // las pruebas poseen un ciclo de vida, con el metodo
    // beforeEach se ejecutará antes de c/u de las evaluaciones
    beforeEach( ()=>{
        wrapper = shallow(<CounterApp/>);
    })

    test('Debe de mostrar <CounterApp /> correctamente (hacer match con un snapshot)', () => {
        
        expect(wrapper).toMatchSnapshot();

    });
    test('debe de mostrar el valor por defecto de 100', () => {
       
        const wrapper = shallow(<CounterApp value={ 100 }/>);
        const counterText = wrapper.find('p').text().trim();
        expect(counterText).toBe('100');
       
    });
    
    test('debe de incrementar con el boton +1', () => {

      
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('p').text().trim();
        expect(counterText).toBe('11')
    
    });
    test('debe de decrementar con el boton -1', () => {

       
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('p').text().trim();
        expect(counterText).toBe('9')
     
    });
    
    
});
