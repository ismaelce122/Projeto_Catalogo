import React, { useState } from 'react';
import './formLogin.css';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, senha });
  };

  return (
    <div className="form-container mt-2 fade_in">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type='email'
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input 
            type='password'
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default FormLogin;