import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './ListaDeUsuario.css'

const ListaDeUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/lista_de_usuarios')
      .then(response => {
        console.log(response.data)
        setUsuarios(response.data)
      })
      .catch(error => {
        console.error('Erro ao Buscar Dados:', error)
      })
  }, []);

  return (
    <div className='lista-usuarios mt-4 fade_in'>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map((usuario) => {
          return (
            <li key={usuario.id}>
              <strong>Nome:</strong> {usuario.nome} <br />
              <strong>Email:</strong> {usuario.email}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default ListaDeUsuario