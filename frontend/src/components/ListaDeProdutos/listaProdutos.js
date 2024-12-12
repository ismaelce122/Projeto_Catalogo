import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './listaProdutos.css'

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

    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-start gap-4 flex-wrap'>
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
                                    <Link to='#' className='btn btn-info'>Comentar</Link>
                                    <Link to='#' className='btn btn-warning mt-1'>Alterar</Link>
                                    <Link to='#' className='btn btn-danger mt-1'>Remover</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListaProdutos