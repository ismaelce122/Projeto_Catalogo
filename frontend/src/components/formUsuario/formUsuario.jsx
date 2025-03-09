import React, { useState } from "react"
import axios from 'axios'
import './formUsuario.css'

function FormUsuario() {
  const [cadastrar, setCadastrar] = useState({
    nome: '',
    email: '',
    senha: ''
  });
  const [erro, setErro] = useState('')

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
    axios.post('http://localhost:3001/usuarios/cadastrar', cadastrar)
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
        console.error('Erro ao Cadastrar Usuário: ', error)
        setErro(error.response.data)
    })
  };

  return (
    <div className="container d-flex justify-content-center fade_in mt-2 p-2">
      <form className="form-control form_usuario p-4" onSubmit={handleSubmit}>
        <h1 className="text-center">Cadastre-se</h1>
        <label><strong>Nome:</strong></label>
        <input
          className="form-control mb-2 p-2"
          type="text"
          name="nome"
          value={cadastrar.nome}
          onChange={handleChange}
        />
        <label><strong>E-mail:</strong></label>
        <input
          className="form-control mb-2 p-2"
          type="email"
          name="email"
          value={cadastrar.email}
          onChange={handleChange}
        />
        <label><strong>Senha:</strong></label>
        <input
          className="form-control p-2 mb-3"
          type="password"
          name="senha"
          value={cadastrar.senha}
          onChange={handleChange}
        />
        <div className="text-start" style={{color: 'red'}}>{erro}</div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default FormUsuario