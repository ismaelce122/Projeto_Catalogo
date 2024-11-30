import React, { useState } from 'react'

function CadastrarProduto() {
    const [produto, setProduto] = useState({
        nome: '',
        descricao: '',
        categoria: '',
        preco: '',
        validade: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setProdutos({ ...produtos, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/cadastrar_produtos', produtos)
            .then(response => {
                console.log(response.data)
                alert('Produto Cadastrado com Sucesso!!!')
                setProdutos({
                    nome: '',
                    descricao: '',
                    categoria: '',
                    preco: '',
                    validade: ''
                })
            })
            .catch(error => {
                console.error('Erro ao Cadastrar Produto: ', error)
                alert('Erro ao Cadastrar Produto :-(')
                setProdutos({
                    nome: '',
                    descricao: '',
                    categoria: '',
                    preco: '',
                    validade: ''
                })
            })
    }

}

export default CadastrarProduto