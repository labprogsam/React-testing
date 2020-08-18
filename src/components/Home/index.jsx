import React, { useState } from 'react';
import Teste from '../Teste';
import Counter from '../Counter';
import './Home.css';

function Home() {
  const names = [
    'Mamuel',
    'Daniel',
    'Edguel',
    'Alysonrel',
  ];
  const emptyField = {
    email: '',
    name: '',
  };
  const [loggedUser, setLoggedUser] = useState(emptyField);
  const [isLogged, setIsLogged] = useState(false)
  return (
    <section className="home">
      <Teste names={names} isLogged={isLogged} setIsLogged={setIsLogged} loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <Counter />
    </section>
  );
}

export default Home;
