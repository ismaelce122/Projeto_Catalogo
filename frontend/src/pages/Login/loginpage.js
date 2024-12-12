import React, { useState } from "react";
import styles from './LoginPage.module.css'; // Importando o CSS module

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
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Login</h2>
        
        <input
          className={styles.inputField}
          type="text"
          name="firstName"
          placeholder="Nome"
          value={form.firstName}
          onChange={handleChange}
        />
        <input
          className={styles.inputField}
          type="text"
          name="lastName"
          placeholder="Sobrenome"
          value={form.lastName}
          onChange={handleChange}
        />
        <input
          className={styles.inputField}
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className={styles.inputField}
          type="password"
          name="password"
          placeholder="Senha"
          value={form.password}
          onChange={handleChange}
        />
        
        <button className={styles.submitButton} type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
