import React, { useState, useEffect } from 'react';

const ListaDeUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const dadosDeUsuarios = [
      { id: 1, nome: 'João', email: 'joao@example.com' },
      { id: 2, nome: 'Maria', email: 'maria@example.com' },
      { id: 3, nome: 'Carlos', email: 'carlos@example.com' },
    ];
    setUsuarios(dadosDeUsuarios);
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>Nome:</strong> {usuario.nome} <br />
            <strong>Email:</strong> {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeUsuario;
