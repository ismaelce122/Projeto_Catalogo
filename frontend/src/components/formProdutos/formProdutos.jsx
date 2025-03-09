import React, { useState } from 'react'
import axios from 'axios'
import './formProdutos.css'

function FormProdutos() {
    const [produtos, setProdutos] = useState({
        nome: '',
        descricao: '',
        categoria: '',
        preco: '',
        img_url: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setProdutos({ ...produtos, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/produtos/cadastrar', produtos)
            .then(response => {
                console.log(response.data)
                alert('Produto Cadastrado com Sucesso!!!')
                setProdutos({
                    nome: '',
                    descricao: '',
                    categoria: '',
                    preco: '',
                    img_url: ''
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
                    img_url: ''
                })
            })
    }

    return (
        <div className='container d-flex justify-content-center fade_in'>
            <form className='form_cadastro' onSubmit={handleSubmit} >
                <label>Nome:</label>
                <input className='input_produtos' type='text' name='nome' onChange={handleChange} value={produtos.nome} />
                <label>Descrição:</label>
                <input className='input_produtos' type='text' name='descricao' onChange={handleChange} value={produtos.descricao} />
                <label>Categoria:</label>
                <input className='input_produtos' type='text' name='categoria' onChange={handleChange} value={produtos.categoria} />
                <label>Preço:</label>
                <input className='input_produtos' type='text' name='preco' onChange={handleChange} value={produtos.preco} />
                <label>Url Da Imagem:</label>
                <input className='input_produtos' type='text' name='img_url' onChange={handleChange} value={produtos.img_url} />
                <button className='btn_cadastrar' type='submit'>Cadastrar Produto</button>
            </form>
        </div>
    )
}

export default FormProdutos