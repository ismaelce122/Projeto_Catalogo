import pool from "../../config/db.js"

// Função para Atualizar o Cadastro de um Produto
const AtualizarProduto = async (req, res) => {
    const { id } = req.params
    const { nome, descricao, categoria, preco, img_url } = req.body
    const sql = 'UPDATE produtos SET nome = ?, descricao = ?, categoria = ?, preco = ?, img_url = ? WHERE id = ?'
    try {
        const [result] = await pool.query(sql, [nome, descricao, categoria, preco, img_url, id])
        if(result.affectedRows > 0) {
            res.status(200).json({ message: 'Produto Atualizado com Sucesso!!!' })
        } else {
            res.status(404).json({ message: 'Produto não Encontrado!!!' })
        }
    }
    catch (error) {
        console.error('Erro ao Atualizar Produto: ', error)
        res.status(500).json({ error: 'Erro ao Atualizar Produto!!!' })
    }
}

export default AtualizarProduto