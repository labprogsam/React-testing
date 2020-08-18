import React, { useState, useEffect } from 'react';
import './teste.css';

function Teste({ names, loggedUser, setLoggedUser, isLogged, setIsLogged }) {
  const [fields, setFields] = useState({
    email: '',
    name: '',
  });

  useEffect(() => {
    setFields(loggedUser);
  }, [loggedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoggedUser(fields);
    setIsLogged(true);
  };

  const handleChange = (e, field) => {
    setFields({ ...fields, [field]: e.target.value.toLowerCase() });
  }

  return (
    <div className="teste">
      {isLogged ? (
        <>
          <p>{`Bem-vindx ${fields.name}, aqui está sua lista de convidados:`}</p>
          <ul>
            {names?.map((name) => <li key={name}>{name}</li>)}
          </ul>
        </>
      ) : (
        <>
          <p>Faça seu login para ter acesso aos testes de mamu</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="email">
              Seu email
              <input required id="email" value={fields?.email || ''} onChange={(e) => handleChange(e, 'email')} type="text" />
            </label>
            <label htmlFor="name">
              Seu nome
              <input required id="name" value={fields?.name || ''} onChange={(e) => handleChange(e, 'name')} type="text" />
            </label>
            <button type="submit">Submitar</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Teste;
