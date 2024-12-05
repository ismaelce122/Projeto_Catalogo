import React, { useState } from 'react';
import './FormUsuario.css';

const FormUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nome, email });
  };

  return (
    <div className="form-container mt-2 fade_in">
      <h1>Formulário de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormUsuario;