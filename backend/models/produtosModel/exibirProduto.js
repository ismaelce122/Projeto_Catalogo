import pool from "../../config/db.js"

// Função para Exibir os Produtos Cadastrados
const ExibirProduto = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM produtos')
        res.json(results)
    } catch (err) {
        res.status(500).send(err)
    }
}

export default ExibirProduto