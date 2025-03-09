import Btn from './buttons'
import './card.css'
import React, { useState } from 'react'

const Card = ({ nome, descricao, categoria, preco, img_url, id }) => {
    const [produtos, setProdutos] = useState([])

    const handleDelete = (id) => {
        setProdutos(produtos.filter((produto) => produto.id !== id))
    }

    return (
        <div>
            <div className='lista_produtos mt-1'>
                <div className='p-2'>
                    <h4>{nome}</h4>
                </div>
                <div>
                    <img src={img_url} alt={nome} style={{ width: '150px', height: '150px' }} />
                </div>
                <div className='text-center mt-1'>
                    <div className='row'>
                        <span className='col-12'>{descricao}</span>
                        <span className='col-12'>Categoria: {categoria}</span>
                        <span className='col-12'>Preço: R$ {preco}</span>
                    </div>
                </div>
                <Btn id={id} onDelete={handleDelete} />
            </div>
        </div>
    )
}

export default Card