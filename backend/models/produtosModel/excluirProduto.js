import pool from "../../config/db.js"

// Função para Excluir Produtos
const ExcluirProduto = async (req, res) => {
    const { id } = req.params
    const sql = 'DELETE FROM produtos WHERE id= ?'
    try {
        const [result] = await pool.query(sql, [id])
        if (result.affectedRows > 0) {
            res.status(200).send({ message: 'Produto Excluído com Sucesso!!!' })
        } else {
            res.status(404).send({message: 'Produto não Encontrado :-('})
        }

    } catch (err) {
        console.error('Erro ao Excluir Produto: ', err)
        res.status(500).send(err)
    }
}

export default ExcluirProduto