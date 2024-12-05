import React, { useState } from "react";

function Login() {
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
    <div className="container mt-2 p-2">
      <form className="form-control" onSubmit={handleSubmit}>
        <h2 className="text-center">Login</h2>
        
        <input
          className="form-control mb-2"
          type="text"
          name="firstName"
          placeholder="Nome"
          value={form.firstName}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          type="text"
          name="lastName"
          placeholder="Sobrenome"
          value={form.lastName}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          type="password"
          name="password"
          placeholder="Senha"
          value={form.password}
          onChange={handleChange}
        />
        
        <button className="btn btn-primary mb-2" type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login
