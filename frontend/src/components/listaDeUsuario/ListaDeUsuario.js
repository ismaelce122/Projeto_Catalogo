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
            <div key={usuario.id} className='d-flex align-items-center justify-content-between'>
              <div>
                <li className='d-flex flex-column'>
                  <div>
                    <strong>Nome:</strong> {usuario.nome}
                  </div>
                  <div>
                    <strong>Email:</strong> {usuario.email}
                  </div>
                </li>
              </div>
              <div>
                <button type='button' className='btn btn-danger'>Excluir</button>
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  );
};

export default ListaDeUsuario