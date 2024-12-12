import React, { useState } from "react"
import axios from 'axios'
import './formUsuario.css'

function FormUsuario() {
  const [cadastrar, setCadastrar] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  // Função para atualizar os valores do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCadastrar({
      ...cadastrar, [name]: value
    });
  };

  // Função para submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/cadastrar_usuario', cadastrar)
      .then(response => {
        console.log(response.data)
        alert('Usuário Cadastrado com Sucesso!!!')
        setCadastrar({
          nome: '',
          email: '',
          senha: ''
        })
      })
      .catch(error => {
        console.error('Erro ao Cadastrar Produto: ', error)
        alert('Erro ao Cadastrar Usuário :-(')
        setCadastrar({
          nome: '',
          email: '',
          senha: ''
        })
    })
  };

  return (
    <div className="container fade_in mt-2 p-2">
      <form className="form-control form_usuario text-center" onSubmit={handleSubmit}>
        <h2 className="text-center">Cadastre-se</h2>
        <input
          className="form-control mb-2"
          type="text"
          name="nome"
          placeholder="Nome"
          value={cadastrar.nome}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          type="email"
          name="email"
          placeholder="E-mail"
          value={cadastrar.email}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          type="password"
          name="senha"
          placeholder="Senha"
          value={cadastrar.senha}
          onChange={handleChange}
        />
        <button className="btn btn-primary mb-2" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default FormUsuario