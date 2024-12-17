import React, { useState } from "react"
import axios from "axios"

function ModalComentario() {
    const [comentarios, setComentarios] = useState({
        nome: '',
        comentario: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setComentarios({ ...comentarios, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://192.168.0.150:3001/api/comentario_usuario', comentarios)
            .then(response => {
                console.log(response.data)
                alert('Comentário Enviado!!!')
                setComentarios({
                    nome: '',
                    comentario: ''
                })
            })
            .catch(error => {
                console.error('Erro ao Enviar Comentário: ', error)
                alert('Erro ao Enviar Comentário :-(')
                setComentarios({
                    nome: '',
                    comentario: ''
                })
            })
    }

    // Modal Comentário
    return (
        <div className="modal fade" id="modalComentar" tabIndex='-1' aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Escreva seu Comentário</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor='recipient-name' className="col-form-label">Nome:</label>
                                <input type="text" className="form-control" id="recipient-name" name="nome" onChange={handleChange} value={comentarios.nome} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor='message-text' className="col-form-label">Mensagem:</label>
                                <textarea className="form-control" id="message-text" name="comentario" onChange={handleChange} value={comentarios.comentario} required></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="submit" className="btn btn-primary">Enviar Comentário</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalComentario