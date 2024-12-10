import axios from 'axios';
import React, { useState } from 'react';
import './formLogin.css';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3001/logar', {email, senha})
      const { token } = response.data
      // Armazenar o Token no LocalStorage
      localStorage.setItem('token', token)
      console.log('Login Efetuado com Sucesso!!!, Token Armazenado: ', token)
      alert('Login Efetuado com Sucesso :-)')
      setEmail('')
      setSenha('')
    }
    catch(error) {
      console.error('Erro ao Fazer Login: ', error)
      setEmail('')
      setSenha('')
    }
  }

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