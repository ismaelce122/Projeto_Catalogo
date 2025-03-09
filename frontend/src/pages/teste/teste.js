import './teste.css'
import Card from "../../components/teste/card"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ModalComentario from '../../components/modalComentario/modalComentario'
import ModalAlterarProduto from '../../components/modalAlterarProduto/modalAlterarProduto'

const Teste = () => {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/produtos/catalogo')
            .then(response => {
                console.log(response.data)
                setProdutos(response.data)
            })
            .catch(error => {
                console.error('Erro ao Buscar Dados:', error)
            })
    }, [])

    return (
        <div className="mt-2">
            <div className="container catalogo mb-2">
                <h1>Catálogo De Produtos</h1>
            </div>
            <div className="container-fluid">
                <div className="d-flex justify-content-around gap-4 flex-wrap">
                    {produtos.map((produto) => {
                        return (
                            <Card
                                key={produto.id}
                                nome={produto.nome}
                                descricao={produto.descricao}
                                categoria={produto.categoria}
                                preco={produto.preco}
                                img_url={produto.img_url}
                                id={produto.id}
                            />
                        )
                    })}
                </div>
            </div>
            <ModalComentario />
            <ModalAlterarProduto />
        </div>
    )
}

export default Teste