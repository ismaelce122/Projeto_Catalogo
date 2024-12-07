import React, { useState } from 'react';

const Product = ({ onAddProduct }) => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [preco, setPreco] = useState('');
    const [validade, setValidade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct({ nome, descricao, categoria, preco, validade });
        setNome('');
        setDescricao('');
        setCategoria('');
        setPreco('');
        setValidade('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
            
            <label>Descrição:</label>
            <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />

            <label>Categoria:</label>
            <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
            
            <label>Preço:</label>
            <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} required />
            
            <label>Validade:</label>
            <input type="date" value={validade} onChange={(e) => setValidade(e.target.value)} required />
            
            <button type="submit">Cadastrar Produto</button>
        </form>
    );
};

export default Product;