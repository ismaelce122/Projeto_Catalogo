import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './comentario.css'

const Comentario = () => {
  const [comentarios, setComentarios] = useState([])

  useEffect(() => {
    axios.get('http://192.168.0.150:3001/comentarios')
      .then(response => {
        console.log(response.data)
        setComentarios(response.data)
      })
      .catch(error => {
        console.error('Erro ao Buscar Dados:', error)
      })

  }, [])

  return (
    <div className='lista-usuarios mt-4 fade_in'>
      <h1>Comentários</h1>
      <ul>
        {comentarios.map((comentario) => {
          return (
            <div key={comentario.id} className='d-flex align-items-center justify-content-between'>
              <div>
                <li className='d-flex flex-column'>
                  <div>
                    <strong>Usuário:</strong> {comentario.nome}
                  </div>
                  <div>
                    <strong>Comentário:</strong> {comentario.comentario}
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
  )
}

export default Comentario;