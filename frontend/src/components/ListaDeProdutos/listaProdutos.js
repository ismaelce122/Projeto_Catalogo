import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './listaProdutos.css'

function ListaProdutos() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios.get('http://192.168.0.150:3001/catalogo_de_produtos')
        .then(response => {
            console.log(response.data)
            setProdutos(response.data)
        })
        .catch(error => {
            console.error('Erro ao Buscar Dados:', error)
        })
    }, [])

    return (
        <div className='box_lista'>
            <ul>
                {produtos.map((produto) => {
                    return (
                        <li key={produto.id} className='lista_produtos'>
                            <h1>{produto.nome}</h1>
                            <img src={require(`./images/camisetas/${produto.img_url}.jpg`)} alt={produto.nome} style={{width: '200px', height: '200px'}} />
                            <p>Descrição do Produto: {produto.descricao}</p>
                            <p>{produto.categoria}</p>
                            <p>Preço: R${produto.preco}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListaProdutos