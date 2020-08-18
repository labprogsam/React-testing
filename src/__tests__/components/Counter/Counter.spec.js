import React from 'react'
import { mount } from 'enzyme'
import { Counter } from '../../../components';

describe('Counter.jsx', () => {
  const wrapper = mount(<Counter onChange={() => {}} defaultValue='default value' />);

  it('O valor inicial deve ser 0', () => {
    expect(wrapper.find('p').at(0).text()).toEqual('0');
  })

  // Simulando eventos e verificando resultados.
  it('Deve possuir o valor 0 após somar e subtrair 1 do valor inicial', () => {
    expect(wrapper.find('button').at(0).simulate('click'));
    expect(wrapper.find('button').at(1).simulate('click'));
    expect(wrapper.find('p').at(0).text()).toEqual('0');
  })
})