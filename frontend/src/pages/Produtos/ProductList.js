import React from 'react'

const ProdutoList = ({ produtos, onDeleteProduct }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Validade</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map((produto) => (
                    <tr key={produto.id}>
                        <td>{produto.nome}</td>
                        <td>{produto.descricao}</td>
                        <td>{produto.categoria}</td>
                        <td>{produto.preco}</td>
                        <td>{produto.validade}</td>
                        <td>
                            <button onClick={() => onDeleteProduct(produto.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProdutoList;