import React, { useState } from 'react'
import axios from 'axios'
import './formCadastro.css'

function FormCadastro() {
    const [produtos, setProdutos] = useState({
        nome: '',
        descricao: '',
        categoria: '',
        preco: '',
        validade: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setProdutos({...produtos, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/cadastrar_produtos', produtos)
            .then(response => {
                console.log(response.data)
                setProdutos({
                    nome: '',
                    descricao: '',
                    categoria: '',
                    preco: '',
                    validade: ''
                })
                .catch(error => {
                    console.error('Erro ao Cadastrar Produto: ', error)
                })
            })
            console.log(produtos)
    }

    return(
        <div>
            <form className='form_cadastro' onSubmit={handleSubmit} >
                <label>Nome:</label>
                <input className='input_produtos' type='text' name='nome' onChange={handleChange} value={produtos.nome} />
                <label>Descrição:</label>
                <input className='input_produtos' type='text' name='descricao' onChange={handleChange} value={produtos.descricao} />
                <label>Categoria:</label>
                <input className='input_produtos' type='text' name='categoria' onChange={handleChange} value={produtos.categoria} />
                <label>Preço:</label>
                <input className='input_produtos' type='text' name='preco' onChange={handleChange} value={produtos.preco} />
                <label>Validade:</label>
                <input className='input_produtos' type='text' name='validade' onChange={handleChange} value={produtos.validade} />
                <button className='btn_cadastrar' type='submit'>Cadastrar Produto</button>
            </form>
        </div>
    )
}

export default FormCadastro