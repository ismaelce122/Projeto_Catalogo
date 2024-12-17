import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './listaProdutos.css'
import ModalComentario from '../modalComentario/modalComentario'
import AlterarItem from '../modalAlterar/modalAlterar'

function ListaProdutos() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/catalogo_de_produtos')
            .then(response => {
                console.log(response.data)
                setProdutos(response.data)
            })
            .catch(error => {
                console.error('Erro ao Buscar Dados:', error)
            })
    }, [])

    const excluirProduto = async (id) => {
        await axios.delete(`http://localhost:3001/catalogo_de_produtos/${id}`)
            .then(() => {
                alert('Produto Excluído com Sucesso!!!')
            })
            .catch(error => {
                console.error('Erro ao Excluir Produto:', error)
            })
    }

    const handleDelete = async (id) => {
        await excluirProduto(id).then(() => {
            setProdutos(produtos.filter(produto => produto.id !== id))
        })
    }  

    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-around gap-4 flex-wrap'>
                {produtos.map((produto) => {
                    return (
                        <div key={produto.id} className='lista_produtos mt-1'>
                            <div className='p-2'>
                                <h4>{produto.nome}</h4>
                            </div>
                            <div>
                                <img src={produto.img_url} alt={produto.nome} style={{ width: '150px', height: '150px' }} />
                            </div>
                            <div className='text-center mt-1'>
                                <div className='row'>
                                    <span className='col-12'>{produto.descricao}</span>
                                    <span className='col-12'>{produto.categoria}</span>
                                    <span className='col-12'>Preço: R${produto.preco}</span>
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='row p-4'>
                                    <button type="button" className='btn btn-success'>Adicionar ao Carrinho</button>
                                    <button type="button" className="btn btn-info mt-1" data-bs-toggle="modal" data-bs-target="#modalComentar" data-bs-whatever="@mdo">Comentar</button>
                                    <button type="button" className='btn btn-warning mt-1' data-bs-toggle="modal" data-bs-target="#modalAlterar" data-bs-whatever="@mdo">Alterar</button>
                                    <button type='button' className='btn btn-danger mt-1' onClick={() => handleDelete(produto.id)}>Remover</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ModalComentario />
            <AlterarItem />
        </div>
    )
}

export default ListaProdutos