import React, { useState, useEffect } from "react"
import axios from 'axios'

function AlterarItem({ id, isOpen, onClose }) {
    const [produtos, setProdutos] = useState({
            nome: '',
            descricao: '',
            categoria: '',
            preco: '',
            img_url: ''
        })
    useEffect(() => {
        if(isOpen && id) {
            axios.get(`http://localhost:3001/produtos/catalogo/${id}`)
            .then((response) => {
                setProdutos(response.data)
                console.log(response.data)
            })
            .catch ((err) => {
                console.error('Erro ao Carregar Produto: ', err)
            })
        }
    }, [isOpen, id])

    // Função para Atualizar os campos conforme o usuário digita
    const hadleChange = (e) => {
        const { name, value } = e.target
        setProdutos({ ...produtos, [name]: value })
    }

    // Função para Enviar as Alterações para o Backend
    const handleSave = () => {
        axios.put(`http://localhost:3001/produtos/catalogo/${id}`)
        .then(() => {
            alert('Produto Atualizado com Sucesso!!!')
            onClose() // Fecha o Modal
        })
        .catch((err) => {
            console.error('Erro ao Atualizar o Produto: ', err)
            alert('Ocorreu um erro ao Atualizar o Produto!!!')
        })
    }

    // if(!isOpen) return null // Não Renderiza o Modal se não estiver aberto

    return (
        <div className="modal fade" id="modalAlterar" tabIndex='-1' aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Aterar Produto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor='recipient-name' className="col-form-label">Nome:</label>
                                <input type="text" className="form-control" id="recipient-name" name="nome" onChange={hadleChange} value={produtos.nome} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='recipient-name' className="col-form-label">Descrição:</label>
                                <input type="text" className="form-control" id="recipient-name" name="descricao" onChange={hadleChange} value={produtos.descricao} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='recipient-name' className="col-form-label">categoria:</label>
                                <input type="text" className="form-control" id="recipient-name" name="categoria" onChange={hadleChange} value={produtos.categoria} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='recipient-name' className="col-form-label">Preço:</label>
                                <input type="text" className="form-control" id="recipient-name" name="preco" onChange={hadleChange} value={produtos.preco} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='recipient-name' className="col-form-label">Url Da Imagem:</label>
                                <input type="text" className="form-control" id="recipient-name" name="img_url" onChange={hadleChange} value={produtos.img_url} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                                <button type="button" className="btn btn-primary" onClick={handleSave}>Alterar Produto</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlterarItem