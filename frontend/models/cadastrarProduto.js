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
        setProduto({...produto, [name]: value})
    }
}

export default CadastrarProduto