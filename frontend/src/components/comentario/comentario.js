import React, { useState, useEffect } from 'react';
import './comentario.css'

const Comentario = () => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const dadosDeUsuarios = [
      { id: 1, nome: 'João', comentario: 'Ótimo Produto!!!' },
      { id: 2, nome: 'Maria', comentario: 'Chegou no Prazo :-) !!!' },
      { id: 3, nome: 'Carlos', comentario: 'Produto muito bem Embalado!!!' }
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
              <strong>Usuário:</strong> {comentario.nome} <br />
              <strong>Comentário:</strong> {comentario.comentario}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Comentario;