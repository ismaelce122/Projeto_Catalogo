import React, { useState } from "react";
import './App.css'; // Estilos para o componente

function LoginPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  // Função para atualizar os valores do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  // Função para submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do login:', form);
    // Aqui você pode adicionar lógica de autenticação
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        <input
          type="text"
          name="firstName"
          placeholder="Nome"
          value={form.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Sobrenome"
          value={form.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={form.password}
          onChange={handleChange}
        />
        
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
