import React, { useEffect, useState } from 'react'
import axios from 'axios'
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
        <div className='container-fluid row row-cols-3 p-4 fade_in'>
            {produtos.map((produto) => {
                return (
                    <div key={produto.id} className='lista_produtos mx-2 mt-2'>
                        <div className='p-2'>
                            <h3>{produto.nome}</h3>
                        </div>
                        <div>
                            <img src={produto.img_url} alt={produto.nome} style={{ width: '150px', height: '150px' }} />
                        </div>
                        <div className='text-center row row-cols-12 p-3'>
                            <span>{produto.descricao}</span>
                            <span>{produto.categoria}</span>
                            <span>Preço: R${produto.preco}</span>
                        </div>
                        <div className='p-2'>
                            <a href='/login' className='btn btn-warning mx-2'>Alterar</a>
                            <a href='/cadastro' className='btn btn-danger'>Remover</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ListaProdutos