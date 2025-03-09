import React, { useEffect, useState } from 'react'
import axios from 'axios'
import IconeAdicionarCarrinho from './image/adicionar_carrinho.png'
import IconeComentario from './image/comentario.png'
import IconeAlterar from './image/alterar_item.png'
import IconeExcluir from './image/excluir.png'

const Btn = ({ id, onDelete }) => {
    const [carrinho, setCarrinho] = useState(() => {
        const salvandoCarrinho = localStorage.getItem('carrinho')
        return salvandoCarrinho ? JSON.parse(salvandoCarrinho) : []
    })

    const excluirProduto = async (id) => {
        await axios.delete(`http://localhost:3001/produtos/catalogo/${id}`)
            .then(() => {
                alert('Produto Excluído com Sucesso!!!')
            })
            .catch(error => {
                console.error('Erro ao Excluir Produto:', error)
            })
    }

    const handleDelete = async (id) => {
        try {
            await excluirProduto(id)
            alert('Produto Excluído com Sucesso sajhsjahdjhdjkshjdkas!!!')
            onDelete(id)
        } catch (error) {
            alert('Erro ao Excluir produto!!!')
        }
    }

    useEffect(() => {
        localStorage.setItem('carrinho', JSON.stringify(carrinho))
    }, [carrinho])

    const adicionandoCarrinho = (produto) => {
        setCarrinho([...carrinho, produto])
        alert('Produto Adicionado com Sucesso!!!')
    }

    return (
        <div>
            <div className='text-center'>
                <div className='row p-4'>
                    <div className='d-flex justify-content-start gap-1 p-0'>
                        <button type="button" className='btn btn-success p-1' title='adicionar ao carrinho' onClick={adicionandoCarrinho}><img src={IconeAdicionarCarrinho} alt='...' /></button>
                        <button type="button" className="btn btn-info p-1" data-bs-toggle="modal" data-bs-target="#modalComentar" data-bs-whatever="@mdo" title='fazer um comentário'><img src={IconeComentario} alt='...' /></button>
                        <button type="button" className='btn btn-warning p-1' data-bs-toggle="modal" data-bs-target="#modalAlterar" data-bs-whatever="@mdo" title='alterar item'><img src={IconeAlterar} alt='...' /></button>
                        <button type='button' className='btn btn-danger p-1' onClick={handleDelete} title='excluir item'><img src={IconeExcluir} alt='...' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Btn