import React, { useState, useEffect } from 'react';
import './comentario.css'

const Comentario = () => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const dadosDeUsuarios = [
      { id: 1, nome: 'João', comentario: 'joao@example.com' },
      { id: 2, nome: 'Maria', comentario: 'maria@example.com' },
      { id: 3, nome: 'Carlos', comentario: 'carlos@example.com' },
    ];
    setComentarios(dadosDeUsuarios);
  }, []);

  return (
    <div className='lista-usuarios mt-4 fade_in'>
      <h1>Comentários</h1>
      <ul>
        {comentarios.map((comentario) => {
          return (
            <li key={comentario.id}>
              <strong>Nome:</strong> {comentario.nome} <br />
              <strong>Comentários:</strong> {comentario.email}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Comentario;