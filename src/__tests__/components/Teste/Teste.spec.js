import React from 'react';
import { Teste } from '../../../components';
import { mount } from 'enzyme';

describe('SearchBar.jsx', () => {
  const loggedUser = {
    email: 'som3@cin',
    name: 'Mamuel',
  };

  // Verificando apenas o texto default do componente.
  it("Deve renderizar a tela de solicitação do loggin do usuário", () => {
    const teste = mount(<Teste />);
    
    expect(teste.find('p')).toHaveLength(1);
    expect(teste.find('p').at(0).text()).toEqual("Faça seu login para ter acesso aos testes de mamu");
  });

    // Verificando resultado após ocorrência de um evento onChange
    it('Deve setar o email do usuário com todas letras em minúsculo', () => {
      const teste = mount(<Teste />);
  
      teste.find('input[type="text"]').at(0).simulate('change', {
        target: {
          value: 'Som3@cin',
        },
      });
      expect(teste.find('input[type="text"]').at(0).prop('value')).toEqual(
        'som3@cin',
      );
    });
  
  // Verificando se a props passada ocasionou mudança do componente.
  it("Deve renderizar a lista de convidados do usuário logado", () => {
    const teste = mount(<Teste loggedUser={loggedUser} isLogged names={["Samuel", "Franuel"]} />);
  
    expect(teste.find('p')).toHaveLength(1);
    expect(teste.find('p').at(0).text()).toEqual(`Bem-vindx ${loggedUser.name}, aqui está sua lista de convidados:`);
    expect(teste.find('li')).toHaveLength(2);
    expect(teste.find('li').at(0).text()).toEqual("Samuel");
    expect(teste.find('li').at(1).text()).toEqual("Franuel");
  });
});
